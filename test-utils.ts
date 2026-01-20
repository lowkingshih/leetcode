// Test utilities for LeetCode problems

type TestCase<T, R> = {
  input: T;
  expected: R;
  description?: string;
};

// Simple assertion function
export function assert<T>(actual: T, expected: T, testName?: string): void {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);
  const prefix = passed ? "✅" : "❌";
  const message = testName ? ` ${testName}` : "";

  if (passed) {
    console.log(`${prefix} PASS${message}`);
  } else {
    console.log(`${prefix} FAIL${message}`);
    console.log(`   Expected: ${JSON.stringify(expected)}`);
    console.log(`   Got:      ${JSON.stringify(actual)}`);
  }
}

// Run a single test case
export function test<T, R>(
  fn: (...args: any[]) => R,
  testCase: TestCase<T, R>
): void {
  const args = Array.isArray(testCase.input) ? testCase.input : [testCase.input];
  const result = fn(...args);
  assert(result, testCase.expected, testCase.description);
}

// Performance measurement
export function measurePerformance<T>(
  fn: () => T,
  label: string = "Execution"
): T {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  const duration = (end - start).toFixed(3);

  console.log(`⏱️  ${label}: ${duration}ms`);
  return result;
}

// Run multiple test cases
export function runTests<T, R>(
  fn: (...args: any[]) => R,
  testCases: TestCase<T, R>[],
  measureTime: boolean = false
): void {
  console.log(`\n🧪 Running ${testCases.length} test(s)...\n`);

  let passed = 0;
  let failed = 0;

  testCases.forEach((testCase, index) => {
    const args = Array.isArray(testCase.input) ? testCase.input : [testCase.input];

    if (measureTime) {
      measurePerformance(() => {
        const result = fn(...args);
        const isPassed = JSON.stringify(result) === JSON.stringify(testCase.expected);
        if (isPassed) passed++;
        else failed++;
        assert(result, testCase.expected, testCase.description || `Test ${index + 1}`);
      }, testCase.description || `Test ${index + 1}`);
    } else {
      const result = fn(...args);
      const isPassed = JSON.stringify(result) === JSON.stringify(testCase.expected);
      if (isPassed) passed++;
      else failed++;
      assert(result, testCase.expected, testCase.description || `Test ${index + 1}`);
    }
  });

  console.log(`\n📊 Results: ${passed} passed, ${failed} failed\n`);
}

// Estimate time complexity by running with different input sizes
export function estimateTimeComplexity(
  fn: (size: number) => void,
  sizes: number[] = [100, 200, 400, 800]
): void {
  console.log("\n⏱️  Time Complexity Estimation:\n");

  const results: { size: number; time: number }[] = [];

  sizes.forEach((size) => {
    const start = performance.now();
    fn(size);
    const end = performance.now();
    const time = end - start;
    results.push({ size, time });
    console.log(`   n=${size.toString().padStart(4)}: ${time.toFixed(3)}ms`);
  });

  // Calculate ratio between consecutive runs
  console.log("\n   Growth rate:");
  for (let i = 1; i < results.length; i++) {
    const ratio = results[i].time / results[i - 1].time;
    const sizeRatio = results[i].size / results[i - 1].size;
    console.log(`   ${results[i - 1].size} → ${results[i].size}: ${ratio.toFixed(2)}x (size: ${sizeRatio}x)`);
  }

  console.log("\n   Hint:");
  console.log("   - Ratio ≈ 1x: O(1) or O(log n)");
  console.log("   - Ratio ≈ 2x (same as size): O(n)");
  console.log("   - Ratio ≈ 4x: O(n²)");
  console.log("   - Ratio ≈ 8x: O(n³)");
  console.log();
}
