import java.util.Iterator;
import java.util.List;

public class FindGuitarTester {

    public static void main(String[] args) {
        // Set up Rick's guitar inventory
        Inventory inventory = new Inventory();
        initializeInventory(inventory);

        InstrumentSpec whatErinLikes =
                new MandolinSpec(Builder.OLSON, "Stratocastor", Type.ELECTRIC, Style.A,
                        Wood.COCOBOLO, Wood.COCOBOLO);

//        new GuitarSpec(Builder.COLLINGS, "CJ", Type.ACOUSTIC, 6,
//                Wood.INDIAN_ROSEWOOD, Wood.SITKA);
        List matchingGuitars = inventory.search(whatErinLikes);
        if (!matchingGuitars.isEmpty()) {
            System.out.println("Erin, you might like these guitars:");
            for (Iterator i = matchingGuitars.iterator(); i.hasNext(); ) {
                Instrument Mandolin = (Instrument)i.next();
                InstrumentSpec spec = Mandolin.getSpec();
                System.out.println("  We have a " +
                        spec.getBuilder() + " " + spec.getModel() + " " +
                        spec.getType() + " Mandolin:\n     " +
                        spec.getBackWood() + " back and sides,\n     " +
                        spec.getTopWood() + " top.\n  You can have it for only $" +
                        Mandolin.getPrice() + "!\n  ----");
            }
        } else {
            System.out.println("Sorry, Erin, we have nothing for you.");
        }
    }

    private static void initializeInventory(Inventory inventory) {
        inventory.addInstrument("11277", 3999.95,
                new GuitarSpec(Builder.COLLINGS, "CJ", Type.ACOUSTIC, 6,
                        Wood.INDIAN_ROSEWOOD, Wood.SITKA));
        inventory.addInstrument("V95693", 1499.95,
                new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, 6,
                        Wood.ALDER, Wood.ALDER));
        inventory.addInstrument("V9512", 1549.95,
                new MandolinSpec(Builder.OLSON, "Stratocastor", Type.ELECTRIC, Style.A,
                        Wood.COCOBOLO, Wood.COCOBOLO));
    }
}
