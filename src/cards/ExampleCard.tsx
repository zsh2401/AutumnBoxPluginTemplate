import { Card, Typography } from 'antd';
import { useService, useServiceState } from '@autumnbox/sdk/app';

import { ExampleService } from '../services/ExampleService';

import type { AutumnCard } from '@autumnbox/sdk';

/**
 * 示例 Card 组件。
 *
 * 在开发你自己的插件时，请删除此文件，替换为你的业务 Card。
 */
const ExampleCardView: React.FC = () => {
  const exampleService = useService(ExampleService);
  const [packageName] = useServiceState(exampleService.packageName);

  return (
    <Card title="Example Card" size="small">
      <Typography.Text>
        包名: <Typography.Text code>{packageName}</Typography.Text>
      </Typography.Text>
      <br />
      <Typography.Text type="warning" style={{ fontSize: 12, marginTop: 8, display: 'block' }}>
        该卡片仅做展示，请删除。
      </Typography.Text>
    </Card>
  );
};

export const ExampleCard: AutumnCard = {
  id: 'example',
  name: 'card.name.example',
  component: ExampleCardView,
};
