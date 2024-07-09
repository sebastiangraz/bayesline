import { Flex, Card, Cards, Text, VectorField, Logo, ShapeField } from '@/components';

export function Brand() {
  return (
    <div className="col">
      <Cards>
        <Card dataTheme={1}>
          <div className="card-header">
            <Text.H1>Brand</Text.H1>
            <Text.H1>
              <Logo type={false} />
            </Text.H1>
          </div>
        </Card>
        <Card dataTheme={2}>
          <div className="card-header">
            <Text.H4>Vector Fields</Text.H4>
          </div>
          <Flex wrap>
            <VectorField variant="swirl" />
            <VectorField variant="straight" />
            <VectorField variant="radial" />
            <VectorField variant="checker" />
            <VectorField variant="grid" />
            <VectorField variant="magnify" />
          </Flex>
        </Card>
        <Card>
          <div className="card-header">
            <Text.H4>Shape Fields</Text.H4>
            <ShapeField variant="swirl" />
            <ShapeField variant="dithered-gradient" />
            <ShapeField variant="radial" />
            <ShapeField variant="bayesian" rows={55} columns={55} padding={1} static />
            <ShapeField variant="bayesian" rows={28} columns={28} padding={1} static />
            <ShapeField variant="checker" />

            <ShapeField variant="pcb" />
          </div>
        </Card>
      </Cards>
    </div>
  );
}
