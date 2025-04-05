[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlanProductionStatistics

# Class: ProductionPlanProductionStatistics

Describes the production statistics of the production plan

**`Generated`**

from message Scailo.ProductionPlanProductionStatistics

## Hierarchy

- `Message`\<[`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)\>

  ↳ **`ProductionPlanProductionStatistics`**

## Table of contents

### Constructors

- [constructor](ProductionPlanProductionStatistics.md#constructor)

### Properties

- [familyId](ProductionPlanProductionStatistics.md#familyid)
- [producedQuantity](ProductionPlanProductionStatistics.md#producedquantity)
- [productionPlanQuantity](ProductionPlanProductionStatistics.md#productionplanquantity)
- [fields](ProductionPlanProductionStatistics.md#fields)
- [runtime](ProductionPlanProductionStatistics.md#runtime)
- [typeName](ProductionPlanProductionStatistics.md#typename)

### Methods

- [clone](ProductionPlanProductionStatistics.md#clone)
- [equals](ProductionPlanProductionStatistics.md#equals)
- [fromBinary](ProductionPlanProductionStatistics.md#frombinary)
- [fromJson](ProductionPlanProductionStatistics.md#fromjson)
- [fromJsonString](ProductionPlanProductionStatistics.md#fromjsonstring)
- [getType](ProductionPlanProductionStatistics.md#gettype)
- [toBinary](ProductionPlanProductionStatistics.md#tobinary)
- [toJSON](ProductionPlanProductionStatistics.md#tojson)
- [toJson](ProductionPlanProductionStatistics.md#tojson-1)
- [toJsonString](ProductionPlanProductionStatistics.md#tojsonstring)
- [equals](ProductionPlanProductionStatistics.md#equals-1)
- [fromBinary](ProductionPlanProductionStatistics.md#frombinary-1)
- [fromJson](ProductionPlanProductionStatistics.md#fromjson-1)
- [fromJsonString](ProductionPlanProductionStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlanProductionStatistics**(`data?`): [`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)\> |

#### Returns

[`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)

#### Overrides

Message\&lt;ProductionPlanProductionStatistics\&gt;.constructor

#### Defined in

src/production_plans.scailo_pb.ts:2294

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the family

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

src/production_plans.scailo_pb.ts:2278

___

### producedQuantity

• **producedQuantity**: `bigint` = `protoInt64.zero`

Stores the produced quantity

**`Generated`**

from field: uint64 produced_quantity = 3;

#### Defined in

src/production_plans.scailo_pb.ts:2292

___

### productionPlanQuantity

• **productionPlanQuantity**: `bigint` = `protoInt64.zero`

Stores the production plan quantity

**`Generated`**

from field: uint64 production_plan_quantity = 2;

#### Defined in

src/production_plans.scailo_pb.ts:2285

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_plans.scailo_pb.ts:2301

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_plans.scailo_pb.ts:2299

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlanProductionStatistics"``

#### Defined in

src/production_plans.scailo_pb.ts:2300

## Methods

### clone

▸ **clone**(): [`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)

Create a deep copy.

#### Returns

[`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md) \| `PlainMessage`\<[`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)\>

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
| `a` | `undefined` \| [`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md) \| `PlainMessage`\<[`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)\> |
| `b` | `undefined` \| [`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md) \| `PlainMessage`\<[`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_plans.scailo_pb.ts:2319

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)

#### Defined in

src/production_plans.scailo_pb.ts:2307

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)

#### Defined in

src/production_plans.scailo_pb.ts:2311

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)

#### Defined in

src/production_plans.scailo_pb.ts:2315
