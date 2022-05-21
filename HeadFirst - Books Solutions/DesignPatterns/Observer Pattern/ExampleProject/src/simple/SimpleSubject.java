package simple;

import java.util.*;

public class SimpleSubject implements Subject {
	private List<simple.Observer> observers;
	private int value = 0;
	
	public SimpleSubject() {
		observers = new ArrayList<simple.Observer>();
	}
	
	public void registerObserver(simple.Observer o) {
		observers.add(o);
	}
	
	public void removeObserver(simple.Observer o) {
		observers.remove(o);
	}
	
	public void notifyObservers() {
		for (simple.Observer observer : observers) {
			observer.update(value);
		}
	}
	
	public void setValue(int value) {
		this.value = value;
		notifyObservers();
	}
}