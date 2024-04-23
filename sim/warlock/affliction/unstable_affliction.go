package affliction

import (
	"time"

	"github.com/wowsims/cata/sim/core"
	"github.com/wowsims/cata/sim/warlock"
)

func (affliction *AfflictionWarlock) registerUnstableAfflictionSpell() {
	affliction.UnstableAffliction = affliction.RegisterSpell(core.SpellConfig{
		ActionID:       core.ActionID{SpellID: 30108},
		SpellSchool:    core.SpellSchoolShadow,
		ProcMask:       core.ProcMaskSpellDamage,
		Flags:          core.SpellFlagHauntSE | core.SpellFlagAPL,
		ClassSpellMask: warlock.WarlockSpellUnstableAffliction,

		ManaCost: core.ManaCostOptions{
			BaseCost:   0.15,
			Multiplier: 1,
		},
		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD:      core.GCDDefault,
				CastTime: time.Millisecond * 1500,
			},
		},

		DamageMultiplierAdditive: 1 + affliction.GrandSpellstoneBonus(),
		CritMultiplier:           affliction.DefaultSpellCritMultiplier(),
		ThreatMultiplier:         1,

		Dot: core.DotConfig{
			Aura: core.Aura{
				Label: "UnstableAffliction",
			},
			NumberOfTicks:    5,
			TickLength:       time.Second * 3,
			BonusCoefficient: 0.2,
			OnSnapshot: func(sim *core.Simulation, target *core.Unit, dot *core.Dot, _ bool) {
				dot.Snapshot(target, 1305/5)
			},
			OnTick: func(sim *core.Simulation, target *core.Unit, dot *core.Dot) {
				//TODO: Baseline crit?
				dot.CalcAndDealPeriodicSnapshotDamage(sim, target, dot.OutcomeSnapshotCrit)
			},
		},

		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			result := spell.CalcOutcome(sim, target, spell.OutcomeMagicHit)
			if result.Landed() {
				spell.SpellMetrics[target.UnitIndex].Hits--
				spell.Dot(target).Apply(sim)
			}
			spell.DealOutcome(sim, result)
		},
	})
}
