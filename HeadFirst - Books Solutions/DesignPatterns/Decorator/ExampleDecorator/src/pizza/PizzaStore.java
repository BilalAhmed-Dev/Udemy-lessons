package pizza;

public class PizzaStore {
 
	public static void main(String args[]) {
		Pizza pizza = new ThickcrustPizza();
		Pizza cheesePizza = new Cheese(pizza);
		Pizza greekPizza = new Olives(cheesePizza);

		System.out.println(greekPizza.getDescription() 
				+ " $" + greekPizza.cost());

	}
}
