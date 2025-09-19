[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrderProductionStatisticsList

# Class: WorkOrderProductionStatisticsList

Describes the list of production statistics of the work order

**`Generated`**

from message Scailo.WorkOrderProductionStatisticsList

## Hierarchy

- `Message`\<[`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)\>

  ↳ **`WorkOrderProductionStatisticsList`**

## Table of contents

### Constructors

- [constructor](WorkOrderProductionStatisticsList.md#constructor)

### Properties

- [list](WorkOrderProductionStatisticsList.md#list)
- [fields](WorkOrderProductionStatisticsList.md#fields)
- [runtime](WorkOrderProductionStatisticsList.md#runtime)
- [typeName](WorkOrderProductionStatisticsList.md#typename)

### Methods

- [clone](WorkOrderProductionStatisticsList.md#clone)
- [equals](WorkOrderProductionStatisticsList.md#equals)
- [fromBinary](WorkOrderProductionStatisticsList.md#frombinary)
- [fromJson](WorkOrderProductionStatisticsList.md#fromjson)
- [fromJsonString](WorkOrderProductionStatisticsList.md#fromjsonstring)
- [getType](WorkOrderProductionStatisticsList.md#gettype)
- [toBinary](WorkOrderProductionStatisticsList.md#tobinary)
- [toJSON](WorkOrderProductionStatisticsList.md#tojson)
- [toJson](WorkOrderProductionStatisticsList.md#tojson-1)
- [toJsonString](WorkOrderProductionStatisticsList.md#tojsonstring)
- [equals](WorkOrderProductionStatisticsList.md#equals-1)
- [fromBinary](WorkOrderProductionStatisticsList.md#frombinary-1)
- [fromJson](WorkOrderProductionStatisticsList.md#fromjson-1)
- [fromJsonString](WorkOrderProductionStatisticsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrderProductionStatisticsList**(`data?`): [`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)\> |

#### Returns

[`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)

#### Overrides

Message\&lt;WorkOrderProductionStatisticsList\&gt;.constructor

#### Defined in

[src/work_orders.scailo_pb.ts:2344](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2344)

## Properties

### list

• **list**: [`WorkOrderProductionStatistics`](WorkOrderProductionStatistics.md)[] = `[]`

**`Generated`**

from field: repeated Scailo.WorkOrderProductionStatistics list = 1;

#### Defined in

[src/work_orders.scailo_pb.ts:2342](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2342)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders.scailo_pb.ts:2351](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2351)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders.scailo_pb.ts:2349](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2349)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrderProductionStatisticsList"``

#### Defined in

[src/work_orders.scailo_pb.ts:2350](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2350)

## Methods

### clone

▸ **clone**(): [`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)

Create a deep copy.

#### Returns

[`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md) \| `PlainMessage`\<[`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)\>

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
| `a` | `undefined` \| [`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md) \| `PlainMessage`\<[`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)\> |
| `b` | `undefined` \| [`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md) \| `PlainMessage`\<[`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders.scailo_pb.ts:2367](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2367)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)

#### Defined in

[src/work_orders.scailo_pb.ts:2355](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2355)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)

#### Defined in

[src/work_orders.scailo_pb.ts:2359](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2359)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrderProductionStatisticsList`](WorkOrderProductionStatisticsList.md)

#### Defined in

[src/work_orders.scailo_pb.ts:2363](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L2363)
