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
            isNaN(FIGHTRUNE.value))
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
        LATK.value = "0"
    }
    if (LCRIDMG.value == "") {
        LCRIDMG.value = "0"
    }
    if (FIGHTRUNE.value == "") {
        FIGHTRUNE.value = "0"
    }


    // if (
    //     ATK.value == "0"
    // ) {
    //     alert("공격력을 입력해주세요.");
    // }

    // if (
    //     CRI.value == "0"
    // ) {
    //     alert("치명 피해를 입력해주세요.");
    // }

    // a= 기본공격력 (((a+(a*고대의검)+(a*바람의성소))*공업유무)*퍼뎀)*(1+(((치피+치피건물)*0.01)+스킬레벨))

    //------------------------------------------------------------------------------------------------------------------------------------//
    //카이로스던전
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
                    (eval(FIGHTRUNE.value) * 8) +
                    eval(GB.value)) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG
        (1 +
            ((eval(CRI.value) + eval(FAG.value) + eval(LCRIDMG.value)) * 0.01 +
                eval(SKILLLV.value))) *
        0.877;
    CairosDMG.innerHTML = Math.ceil(Cairos);
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
                    (eval(FIGHTRUNE.value) * 8) +
                    eval(GB.value)) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG
        (1 + eval(SKILLLV.value)) *
        0.877;
    NCairosDMG.innerHTML = Math.ceil(NCairos);

    //------------------------------------------------------------------------------------------------------------------------------------//
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
                    (eval(FIGHTRUNE.value) * 8) +
                    eval(FB.value)) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG
        (1 +
            ((eval(CRI.value) +
                    eval(FAG.value) +
                    eval(LCRIDMG.value) +
                    eval(FR.value)) *
                0.01 +
                eval(SKILLLV.value))) *
        0.877;
    GuildBattleDMG.innerHTML = Math.ceil(GuildBattle);
    //------------------------------------------------------------------------------------------------------------------------------------//
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
                    (eval(FIGHTRUNE.value) * 8) +
                    eval(FB.value)) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG
        (1 + eval(SKILLLV.value)) *
        0.877;
    NGuildBattleDMG.innerHTML = Math.ceil(NGuildBattle);

    //------------------------------------------------------------------------------------------------------------------------------------//
    // 아레나
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
                    (eval(FIGHTRUNE.value) * 8)) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG
        (1 +
            ((eval(CRI.value) + eval(FAG.value)) * 0.01 +
                eval(SKILLLV.value))) *
        0.877;
    ArenaDMG.innerHTML = Math.ceil(ARENA);
    //------------------------------------------------------------------------------------------------------------------------------------//
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
                    (eval(FIGHTRUNE.value) * 8) +
                    eval(GB.value)) *
                0.01)) *
        // INCREASE ATK BUFF
        eval(IAP.value) *
        0.68 *
        // PLUS CIRDMG
        (1 + eval(SKILLLV.value)) *
        0.877;
    NArenaDMG.innerHTML = Math.ceil(NARENA);

    //------------------------------------------------------------------------------------------------------------------------------------//
    allCairosDMG.innerHTML = Math.ceil(Cairos) * 3;
    allNCairosDMG.innerHTML = Math.ceil(NCairos) * 3;
    allGuildBattleDMG.innerHTML = Math.ceil(GuildBattle) * 3;
    allNGuildBattleDMG.innerHTML = Math.ceil(NGuildBattle) * 3;
    allArenaDMG.innerHTML = Math.ceil(ARENA) * 3;
    allNArenaDMG.innerHTML = Math.ceil(NARENA) * 3;
}