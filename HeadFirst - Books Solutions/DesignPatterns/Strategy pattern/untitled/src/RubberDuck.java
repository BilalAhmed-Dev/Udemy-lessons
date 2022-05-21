public class RubberDuck extends Duck {


	
	public RubberDuck(FlyBehavior flyBehavior, QuackBehavior quackBehavior) {
		this.flyBehavior = flyBehavior;
		this.quackBehavior = quackBehavior;
	}
 
	public void display() {
		System.out.println("I'm a rubber duckie");
	}
}
