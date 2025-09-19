[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlanProductionStatisticsList

# Class: ProductionPlanProductionStatisticsList

Describes the list of production statistics of the production plan

**`Generated`**

from message Scailo.ProductionPlanProductionStatisticsList

## Hierarchy

- `Message`\<[`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)\>

  ↳ **`ProductionPlanProductionStatisticsList`**

## Table of contents

### Constructors

- [constructor](ProductionPlanProductionStatisticsList.md#constructor)

### Properties

- [list](ProductionPlanProductionStatisticsList.md#list)
- [fields](ProductionPlanProductionStatisticsList.md#fields)
- [runtime](ProductionPlanProductionStatisticsList.md#runtime)
- [typeName](ProductionPlanProductionStatisticsList.md#typename)

### Methods

- [clone](ProductionPlanProductionStatisticsList.md#clone)
- [equals](ProductionPlanProductionStatisticsList.md#equals)
- [fromBinary](ProductionPlanProductionStatisticsList.md#frombinary)
- [fromJson](ProductionPlanProductionStatisticsList.md#fromjson)
- [fromJsonString](ProductionPlanProductionStatisticsList.md#fromjsonstring)
- [getType](ProductionPlanProductionStatisticsList.md#gettype)
- [toBinary](ProductionPlanProductionStatisticsList.md#tobinary)
- [toJSON](ProductionPlanProductionStatisticsList.md#tojson)
- [toJson](ProductionPlanProductionStatisticsList.md#tojson-1)
- [toJsonString](ProductionPlanProductionStatisticsList.md#tojsonstring)
- [equals](ProductionPlanProductionStatisticsList.md#equals-1)
- [fromBinary](ProductionPlanProductionStatisticsList.md#frombinary-1)
- [fromJson](ProductionPlanProductionStatisticsList.md#fromjson-1)
- [fromJsonString](ProductionPlanProductionStatisticsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlanProductionStatisticsList**(`data?`): [`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)\> |

#### Returns

[`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)

#### Overrides

Message\&lt;ProductionPlanProductionStatisticsList\&gt;.constructor

#### Defined in

[src/production_plans.scailo_pb.ts:2352](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L2352)

## Properties

### list

• **list**: [`ProductionPlanProductionStatistics`](ProductionPlanProductionStatistics.md)[] = `[]`

**`Generated`**

from field: repeated Scailo.ProductionPlanProductionStatistics list = 1;

#### Defined in

[src/production_plans.scailo_pb.ts:2350](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L2350)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans.scailo_pb.ts:2359](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L2359)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans.scailo_pb.ts:2357](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L2357)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlanProductionStatisticsList"``

#### Defined in

[src/production_plans.scailo_pb.ts:2358](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L2358)

## Methods

### clone

▸ **clone**(): [`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)

Create a deep copy.

#### Returns

[`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md) \| `PlainMessage`\<[`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)\>

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
| `a` | `undefined` \| [`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md) \| `PlainMessage`\<[`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)\> |
| `b` | `undefined` \| [`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md) \| `PlainMessage`\<[`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans.scailo_pb.ts:2375](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L2375)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)

#### Defined in

[src/production_plans.scailo_pb.ts:2363](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L2363)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)

#### Defined in

[src/production_plans.scailo_pb.ts:2367](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L2367)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlanProductionStatisticsList`](ProductionPlanProductionStatisticsList.md)

#### Defined in

[src/production_plans.scailo_pb.ts:2371](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L2371)
