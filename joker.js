// 0. 계산버튼
var btt = document.querySelector("#bb");
// 1.공격력
var ATK = document.querySelector("#ATK");
// 2.치명피해
var CRI = document.querySelector("#CRI");
// 3.고대의 검
var AS = document.querySelector("#AS");
// 4.바람의 성소
var WS = document.querySelector("#WS");
// 5.무너진 고대 가디언
var FAG = document.querySelector("#FAG");
// 6.길드버프 공격력(카이로스/레이드 공격력)
var GB = document.querySelector("#GB");
// 7.투지의 깃발(길드전 공격력)
var FB = document.querySelector("#FB");
// 8.광폭의 깃발(길드전 치명피해)
var FR = document.querySelector("#FR");
// 9.리더스킬 공격력
var LATK = document.querySelector("#LATK");
// 10.리더스킬 치명피해
var LCRIDMG = document.querySelector("#LCRIDMG");
// 11.공격력 강화버프
var IAP = document.querySelector("#IAP");
// 12.절단마술 레벨
var SKILLLV = document.querySelector("#SKILLLV");
// 13.투지룬
var FIGHTRUNE = document.querySelector("#FIGHTRUNE");
// 14. 치명타 발생시 카이로스 던전 데미지
var CairosDMG = document.querySelector("#CairosDMG");
// 15. 치명타 미발생시 카이로스 던전 데미지
var NCairosDMG = document.querySelector("#NCairosDMG");
// 16. 치명타 발생시 길드전 데미지
var GuildBattleDMG = document.querySelector("#GuildBattleDMG");
// 17. 치명타 미발생시 길드전 데미지
var NGuildBattleDMG = document.querySelector("#NGuildBattleDMG");
// 18. 치명타 발생시 아레나 데미지
var ArenaDMG = document.querySelector("#ArenaDMG");
// 19. 치명타 미발생시 아레나 데미지
var NArenaDMG = document.querySelector("#NArenaDMG");
// 20. 크리티컬 확률
var CRIRATE = document.querySelector("#CRIRATE");

function cal() {
    if (
        (isNaN(ATK.value),
            isNaN(CRI.value),
            isNaN(AS.value),
            isNaN(WS.value),
            isNaN(FAG.value),
            isNaN(GB.value),
            isNaN(FB.value),
            isNaN(FR.value),
            isNaN(LATK.value),
            isNaN(LCRIDMG.value),
            isNaN(IAP.value),
            isNaN(SKILLLV.value),
            isNaN(FIGHTRUNE.value),
            isNaN(CRIRATE.value)
        )
    ) {
        alert("입력칸 내에는 숫자만 입력해주세요.");
    }

    if (ATK.value == "") {
        ATK.value = "0";
    }
    if (CRI.value == "") {
        CRI.value = "0";
    }
    if (LATK.value == "") {
        LATK.value = "0";
    }
    if (LCRIDMG.value == "") {
        LCRIDMG.value = "0";
    }
    if (FIGHTRUNE.value == "") {
        FIGHTRUNE.value = "0";
    }
    if (CRIRATE.value == "") {
        CRIRATE.value = "0";
    }
    if (CRIRATE.value > 100) {
        CRIRATE.value = "100";
    }
    ATK.value = parseInt(ATK.value, 10);
    CRI.value = parseInt(CRI.value, 10);
    LATK.value = parseInt(LATK.value, 10);
    LCRIDMG.value = parseInt(LCRIDMG.value, 10);
    FIGHTRUNE.value = parseInt(FIGHTRUNE.value, 10);
    CRIRATE.value = parseInt(CRIRATE.value, 10);

    //------------------------------------------------------------------------------------------------------------------------------------//
    //카이로스던전(기댓값)
    var Cairos;
    Cairos =
        // BASE ATK + RUNE ATK
        (900 +
            eval(ATK.value) +
            // ARENA and READER ATK
            900 *
            ((eval(AS.value) +
                    eval(WS.value) +
                    eval(LATK.value) +
                    eval(FIGHTRUNE.value) * 8 +
                    eval(GB.value)) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG
        (1 +
            (((eval(CRI.value) + eval(FAG.value) + eval(LCRIDMG.value) + eval(GB.value)) * 0.01) * eval(CRIRATE.value) * 0.01 +
                eval(SKILLLV.value))) *
        (1000 / 1140);
    CairosDMG.innerHTML = Math.ceil(Cairos);
    MAXCairosDMG.innerHTML = Math.ceil(Cairos * 1.03);
    MINCairosDMG.innerHTML = Math.ceil(Cairos * 0.97);
    MAXallCairosDMG.innerHTML = Math.ceil(Cairos * 3 * 1.03);
    MINallCairosDMG.innerHTML = Math.ceil(Cairos * 3 * 0.97);

    //------------------------------------------------------------------------------------------------------------------------------------//
    //카이로스던전(전부 치명타)
    var Cairos;
    Cairos =
        // BASE ATK + RUNE ATK
        (900 +
            eval(ATK.value) +
            // ARENA and READER ATK
            900 *
            ((eval(AS.value) +
                    eval(WS.value) +
                    eval(LATK.value) +
                    eval(FIGHTRUNE.value) * 8 +
                    eval(GB.value)) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG
        (1 +
            (((eval(CRI.value) + eval(FAG.value) + eval(LCRIDMG.value) + eval(GB.value)) * 0.01) * 1 +
                eval(SKILLLV.value))) *
        (1000 / 1140);
    YCairosDMG.innerHTML = Math.ceil(Cairos);
    MAXYCairosDMG.innerHTML = Math.ceil(Cairos * 1.03);
    MINYCairosDMG.innerHTML = Math.ceil(Cairos * 0.97);
    MAXallYCairosDMG.innerHTML = Math.ceil(Cairos * 3 * 1.03);
    MINallYCairosDMG.innerHTML = Math.ceil(Cairos * 3 * 0.97);

    //------------------------------------------------------------------------------------------------------------------------------------//
    //카이로스던전 치명타X
    var NCairos;
    NCairos =
        // BASE ATK + RUNE ATK
        (900 +
            eval(ATK.value) +
            // ARENA and READER ATK
            900 *
            ((eval(AS.value) +
                    eval(WS.value) +
                    eval(LATK.value) +
                    eval(FIGHTRUNE.value) * 8 +
                    eval(GB.value)) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG
        (1 + eval(SKILLLV.value)) *
        (1000 / 1140);

    NCairosDMG.innerHTML = Math.ceil(NCairos);
    MAXNCairosDMG.innerHTML = Math.ceil(NCairos * 1.03);
    MINNCairosDMG.innerHTML = Math.ceil(NCairos * 0.97);
    MAXallNCairosDMG.innerHTML = Math.ceil(NCairos * 3 * 1.03);
    MINallNCairosDMG.innerHTML = Math.ceil(NCairos * 3 * 0.97);
    //------------------------------------------------------------------------------------------------------------------------------------//
    //길드배틀(기댓값)
    var GuildBattle;
    GuildBattle =
        // BASE ATK + RUNE ATK
        (900 +
            eval(ATK.value) +
            // ARENA and READER ATK
            900 *
            ((eval(AS.value) +
                    eval(WS.value) +
                    eval(LATK.value) +
                    eval(FIGHTRUNE.value) * 8 +
                    eval(FB.value)) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG
        (1 +
            (((eval(CRI.value) + eval(FAG.value) + eval(LCRIDMG.value) + eval(FR.value)) * 0.01) * eval(CRIRATE.value) * 0.01 +
                eval(SKILLLV.value))) *
        (1000 / 1140);


    GuildBattleDMG.innerHTML = Math.ceil(GuildBattle);
    MAXGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 1.03);
    MINGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 0.97);
    MAXallGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 3 * 1.03);
    MINallGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 3 * 0.97);

    //------------------------------------------------------------------------------------------------------------------------------------//
    //길드배틀 전부치명타
    var GuildBattle;
    GuildBattle =
        // BASE ATK + RUNE ATK
        (900 +
            eval(ATK.value) +
            // ARENA and READER ATK
            900 *
            ((eval(AS.value) +
                    eval(WS.value) +
                    eval(LATK.value) +
                    eval(FIGHTRUNE.value) * 8 +
                    eval(FB.value)) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG
        (1 +
            (((eval(CRI.value) + eval(FAG.value) + eval(LCRIDMG.value) + eval(FR.value)) * 0.01) * 1 +
                eval(SKILLLV.value))) *
        (1000 / 1140);


    YGuildBattleDMG.innerHTML = Math.ceil(GuildBattle);
    MAXYGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 1.03);
    MINYGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 0.97);
    MAXallYGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 3 * 1.03);
    MINallYGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 3 * 0.97);

    //------------------------------------------------------------------------------------------------------------------------------------//
    //길드배틀 치명타X
    var NGuildBattle;
    NGuildBattle =
        // BASE ATK + RUNE ATK
        (900 +
            eval(ATK.value) +
            // ARENA and READER ATK
            900 *
            ((eval(AS.value) +
                    eval(WS.value) +
                    eval(LATK.value) +
                    eval(FIGHTRUNE.value) * 8 +
                    eval(FB.value)) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG
        (1 + eval(SKILLLV.value)) *
        (1000 / 1140);
    NGuildBattleDMG.innerHTML = Math.ceil(NGuildBattle);
    MAXNGuildBattleDMG.innerHTML = Math.ceil(NGuildBattle * 1.03);
    MINNGuildBattleDMG.innerHTML = Math.ceil(NGuildBattle * 0.97);
    MAXallNGuildBattleDMG.innerHTML = Math.ceil(NGuildBattle * 3 * 1.03);
    MINallNGuildBattleDMG.innerHTML = Math.ceil(NGuildBattle * 3 * 0.97);

    //------------------------------------------------------------------------------------------------------------------------------------//
    // 아레나(기댓값)
    var ARENA;
    ARENA =
        // BASE ATK + RUNE ATK
        (900 +
            eval(ATK.value) +
            // ARENA and READER ATK
            900 *
            ((eval(AS.value) +
                    eval(WS.value) +
                    eval(LATK.value) +
                    eval(FIGHTRUNE.value) * 8) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG

        (1 +
            (((eval(CRI.value) + eval(FAG.value) + eval(LCRIDMG.value)) * 0.01) * eval(CRIRATE.value) * 0.01 +
                eval(SKILLLV.value))) *
        (1000 / 1140);


    ArenaDMG.innerHTML = Math.ceil(ARENA);
    MAXArenaDMG.innerHTML = Math.ceil(ARENA * 1.03);
    MINArenaDMG.innerHTML = Math.ceil(ARENA * 0.97);
    MAXallArenaDMG.innerHTML = Math.ceil(ARENA * 3 * 1.03);
    MINallArenaDMG.innerHTML = Math.ceil(ARENA * 3 * 0.97);


    //------------------------------------------------------------------------------------------------------------------------------------//
    // 아레나(기댓값)
    var ARENA;
    ARENA =
        // BASE ATK + RUNE ATK
        (900 +
            eval(ATK.value) +
            // ARENA and READER ATK
            900 *
            ((eval(AS.value) +
                    eval(WS.value) +
                    eval(LATK.value) +
                    eval(FIGHTRUNE.value) * 8) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG

        (1 +
            (((eval(CRI.value) + eval(FAG.value) + eval(LCRIDMG.value)) * 0.01) * 1 +
                eval(SKILLLV.value))) *
        (1000 / 1140);


    YArenaDMG.innerHTML = Math.ceil(ARENA);
    MAXYArenaDMG.innerHTML = Math.ceil(ARENA * 1.03);
    MINYArenaDMG.innerHTML = Math.ceil(ARENA * 0.97);
    MAXallYArenaDMG.innerHTML = Math.ceil(ARENA * 3 * 1.03);
    MINallYArenaDMG.innerHTML = Math.ceil(ARENA * 3 * 0.97);


    //------------------------------------------------------------------------------------------------------------------------------------//
    //아레나 치명타X
    var NARENA;
    NARENA =
        // BASE ATK + RUNE ATK
        (900 +
            eval(ATK.value) +
            // ARENA and READER ATK
            900 *
            ((eval(AS.value) +
                    eval(WS.value) +
                    eval(LATK.value) +
                    eval(FIGHTRUNE.value) * 8) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG
        (1 + eval(SKILLLV.value)) *
        (1000 / 1140);
    NArenaDMG.innerHTML = Math.ceil(NARENA);
    MAXNArenaDMG.innerHTML = Math.ceil(NARENA * 1.03);
    MINNArenaDMG.innerHTML = Math.ceil(NARENA * 0.97);
    MAXallNArenaDMG.innerHTML = Math.ceil(NARENA * 3 * 1.03);
    MINallNArenaDMG.innerHTML = Math.ceil(NARENA * 3 * 0.97);

    //------------------------------------------------------------------------------------------------------------------------------------//



}