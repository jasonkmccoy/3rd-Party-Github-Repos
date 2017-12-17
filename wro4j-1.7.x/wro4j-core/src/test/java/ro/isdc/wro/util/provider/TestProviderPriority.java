package ro.isdc.wro.util.provider;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import ro.isdc.wro.config.Context;
import ro.isdc.wro.util.Ordered;


public class TestProviderPriority {
  
  private static Ordered HIGH = new Ordered() {
    public int getOrder() {
      return Ordered.HIGHEST;
    }
  };
  private static Object MEDIUM = new Object();
  private static Ordered MEDIUM_HIGH = new Ordered() {
    public int getOrder() {
      return 10;
    }
  };
  private static Ordered LOW = new Ordered() {
    public int getOrder() {
      return Ordered.LOWEST;
    }
  };
  
  @BeforeClass
  public static void onBeforeClass() {
    assertEquals(0, Context.countActive());
  }
  
  @AfterClass
  public static void onAfterClass() {
    assertEquals(0, Context.countActive());
  }
  
  @Test
  public void shouldSortFromLowToHigh() {
    List<?> priorities = Arrays.asList(MEDIUM_HIGH, HIGH, LOW, MEDIUM, MEDIUM, HIGH, LOW, MEDIUM, HIGH);
    
    Collections.sort(priorities, Ordered.ASCENDING_COMPARATOR);
    
    assertEquals(Arrays.asList(LOW, LOW, MEDIUM, MEDIUM, MEDIUM, MEDIUM_HIGH, HIGH, HIGH, HIGH), priorities);
  }
  
  @Test
  public void shouldCompareSamePriorityEqually() {
    assertEquals(0, Ordered.ASCENDING_COMPARATOR.compare(LOW, LOW));
    assertEquals(0, Ordered.ASCENDING_COMPARATOR.compare(MEDIUM, MEDIUM));
    assertEquals(0, Ordered.ASCENDING_COMPARATOR.compare(HIGH, HIGH));
  }
}
