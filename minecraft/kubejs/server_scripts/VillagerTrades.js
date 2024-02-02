
MoreJSEvents.villagerTrades((event) => {
    // Armorer
    // Tier 1
    event.removeVanillaTrades(["minecraft:armorer"], 1);

    event.addTrade("minecraft:armorer", 1, ["minecraft:coal"], "createdeco:gold_coin");
        //villagerTrades.addTrade(<profession: minecraft:armorer>, 1, <item: minecraft:coal> * 15, <item: apocalypsenow:money>, 16, 2, 0.05);
        //villagerTrades.addTrade(<profession: minecraft:armorer>, 1, <item: apocalypsenow:money> * 2, <item: minecraft:chainmail_boots>, 12, 2, 0.2);
        //villagerTrades.addTrade(<profession: minecraft:armorer>, 1, <item: apocalypsenow:money> * 3, <item: minecraft:chainmail_helmet>, 12, 2, 0.2);
        //villagerTrades.addTrade(<profession: minecraft:armorer>, 1, <item: apocalypsenow:money> * 4, <item: minecraft:chainmail_leggings>, 12, 3, 0.2);
        //villagerTrades.addTrade(<profession: minecraft:armorer>, 1, <item: apocalypsenow:money> * 5, <item: minecraft:chainmail_chestplate>, 12, 3, 0.2);

});