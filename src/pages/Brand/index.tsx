import { Hero, Flex, Card, Cards, Text, VectorField, Logo } from '@/components';
import composition from '@/assets/composition.png';
import sidebar from '@/assets/sidebar.png';

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
          </Flex>
        </Card>
        <Card>
          <div className="card-header">
            <Text.H4>Brand</Text.H4>{' '}
          </div>
        </Card>
      </Cards>
    </div>
  );
}
