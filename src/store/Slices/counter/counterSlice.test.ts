import { configureStore } from '@reduxjs/toolkit';
import { counterSlice, CounterState, increment } from './counterSlice';

// Configura el store para pruebas
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

describe('counterSlice', () => {
  // Test para el reducer increment
  test('should handle initial state', () => {
    // Verifica que el estado inicial es el esperado
    const state = store.getState().counter as CounterState;
    expect(state.value).toBe(10);
  });

  test('should handle increment', () => {
    // Despacha la acción de incremento
    store.dispatch(increment());

    // Verifica que el valor ha sido incrementado
    const state = store.getState().counter as CounterState;
    expect(state.value).toBe(11);
  });

  // Test para el selector selectCount
  
});
