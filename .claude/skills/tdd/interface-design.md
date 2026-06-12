# Interface Design for Testability

Good interfaces make testing natural:

1. **Accept dependencies, don't create them** — the DI rule and its example live in [mocking.md "Designing for Mockability"](mocking.md)

2. **Return results, don't produce side effects**

   ```typescript
   // Testable
   function calculateDiscount(cart): Discount {}

   // Hard to test
   function applyDiscount(cart): void {
     cart.total -= discount;
   }
   ```

3. **Small surface area**
   - Fewer methods = fewer tests needed
   - Fewer params = simpler test setup
