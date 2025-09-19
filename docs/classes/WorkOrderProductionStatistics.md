[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrderProductionStatistics

# Class: WorkOrderProductionStatistics

Describes the production statistics of the work order

**`Generated`**

from message Scailo.WorkOrderProductionStatistics

## Hierarchy

- `Message`\<[`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)\>

  ↳ **`WorkOrderProductionStatistics`**

## Table of contents

### Constructors

- [constructor](WorkOrderProductionStatistics.md#constructor)

### Properties

- [familyId](WorkOrderProductionStatistics.md#familyid)
- [producedQuantity](WorkOrderProductionStatistics.md#producedquantity)
- [productionPlanQuantity](WorkOrderProductionStatistics.md#productionplanquantity)
- [workOrderQuantity](WorkOrderProductionStatistics.md#workorderquantity)
- [fields](WorkOrderProductionStatistics.md#fields)
- [runtime](WorkOrderProductionStatistics.md#runtime)
- [typeName](WorkOrderProductionStatistics.md#typename)

### Methods

- [clone](WorkOrderProductionStatistics.md#clone)
- [equals](WorkOrderProductionStatistics.md#equals)
- [fromBinary](WorkOrderProductionStatistics.md#frombinary)
- [fromJson](WorkOrderProductionStatistics.md#fromjson)
- [fromJsonString](WorkOrderProductionStatistics.md#fromjsonstring)
- [getType](WorkOrderProductionStatistics.md#gettype)
- [toBinary](WorkOrderProductionStatistics.md#tobinary)
- [toJSON](WorkOrderProductionStatistics.md#tojson)
- [toJson](WorkOrderProductionStatistics.md#tojson-1)
- [toJsonString](WorkOrderProductionStatistics.md#tojsonstring)
- [equals](WorkOrderProductionStatistics.md#equals-1)
- [fromBinary](WorkOrderProductionStatistics.md#frombinary-1)
- [fromJson](WorkOrderProductionStatistics.md#fromjson-1)
- [fromJsonString](WorkOrderProductionStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrderProductionStatistics**(`data?`): [`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)\> |

#### Returns

[`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)

#### Overrides

Message\&lt;WorkOrderProductionStatistics\&gt;.constructor

#### Defined in

[src/work_orders.scailo_pb.ts:2301](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2301)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the family

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

[src/work_orders.scailo_pb.ts:2278](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2278)

___

### producedQuantity

• **producedQuantity**: `bigint` = `protoInt64.zero`

Stores the produced quantity

**`Generated`**

from field: uint64 produced_quantity = 4;

#### Defined in

[src/work_orders.scailo_pb.ts:2299](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2299)

___

### productionPlanQuantity

• **productionPlanQuantity**: `bigint` = `protoInt64.zero`

Stores the production plan quantity

**`Generated`**

from field: uint64 production_plan_quantity = 2;

#### Defined in

[src/work_orders.scailo_pb.ts:2285](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2285)

___

### workOrderQuantity

• **workOrderQuantity**: `bigint` = `protoInt64.zero`

Stores the work order quantity

**`Generated`**

from field: uint64 work_order_quantity = 3;

#### Defined in

[src/work_orders.scailo_pb.ts:2292](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2292)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders.scailo_pb.ts:2308](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2308)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders.scailo_pb.ts:2306](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2306)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrderProductionStatistics"``

#### Defined in

[src/work_orders.scailo_pb.ts:2307](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2307)

## Methods

### clone

▸ **clone**(): [`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)

Create a deep copy.

#### Returns

[`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md) \| `PlainMessage`\<[`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md) \| `PlainMessage`\<[`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)\> |
| `b` | `undefined` \| [`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md) \| `PlainMessage`\<[`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders.scailo_pb.ts:2327](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2327)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)

#### Defined in

[src/work_orders.scailo_pb.ts:2315](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2315)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)

#### Defined in

[src/work_orders.scailo_pb.ts:2319](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2319)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)

#### Defined in

[src/work_orders.scailo_pb.ts:2323](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2323)
