import React, { useState } from "react";

import { Stepper, Button, Group } from "@mantine/core";
import ShopOverview from "~/createShop/Overview";

function Overview() {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div>
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        allowNextStepsSelect={false}
      >
        <Stepper.Step label="First step" description="Overview">
          <ShopOverview />
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="right" className="mt-auto">
        {active !== 0 ? (
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
        ) : null}
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </div>
  );
}

export default Overview;
