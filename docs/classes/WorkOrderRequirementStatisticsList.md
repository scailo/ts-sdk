[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrderRequirementStatisticsList

# Class: WorkOrderRequirementStatisticsList

Describes the list of requirement statistics of the work order

**`Generated`**

from message Scailo.WorkOrderRequirementStatisticsList

## Hierarchy

- `Message`\<[`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)\>

  ↳ **`WorkOrderRequirementStatisticsList`**

## Table of contents

### Constructors

- [constructor](WorkOrderRequirementStatisticsList.md#constructor)

### Properties

- [list](WorkOrderRequirementStatisticsList.md#list)
- [fields](WorkOrderRequirementStatisticsList.md#fields)
- [runtime](WorkOrderRequirementStatisticsList.md#runtime)
- [typeName](WorkOrderRequirementStatisticsList.md#typename)

### Methods

- [clone](WorkOrderRequirementStatisticsList.md#clone)
- [equals](WorkOrderRequirementStatisticsList.md#equals)
- [fromBinary](WorkOrderRequirementStatisticsList.md#frombinary)
- [fromJson](WorkOrderRequirementStatisticsList.md#fromjson)
- [fromJsonString](WorkOrderRequirementStatisticsList.md#fromjsonstring)
- [getType](WorkOrderRequirementStatisticsList.md#gettype)
- [toBinary](WorkOrderRequirementStatisticsList.md#tobinary)
- [toJSON](WorkOrderRequirementStatisticsList.md#tojson)
- [toJson](WorkOrderRequirementStatisticsList.md#tojson-1)
- [toJsonString](WorkOrderRequirementStatisticsList.md#tojsonstring)
- [equals](WorkOrderRequirementStatisticsList.md#equals-1)
- [fromBinary](WorkOrderRequirementStatisticsList.md#frombinary-1)
- [fromJson](WorkOrderRequirementStatisticsList.md#fromjson-1)
- [fromJsonString](WorkOrderRequirementStatisticsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrderRequirementStatisticsList**(`data?`): [`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)\> |

#### Returns

[`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)

#### Overrides

Message\&lt;WorkOrderRequirementStatisticsList\&gt;.constructor

#### Defined in

src/work_orders.scailo_pb.ts:2222

## Properties

### list

• **list**: [`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)[] = `[]`

**`Generated`**

from field: repeated Scailo.WorkOrderRequirementStatistics list = 1;

#### Defined in

src/work_orders.scailo_pb.ts:2220

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/work_orders.scailo_pb.ts:2229

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/work_orders.scailo_pb.ts:2227

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrderRequirementStatisticsList"``

#### Defined in

src/work_orders.scailo_pb.ts:2228

## Methods

### clone

▸ **clone**(): [`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)

Create a deep copy.

#### Returns

[`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md) \| `PlainMessage`\<[`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)\>

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
| `a` | `undefined` \| [`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md) \| `PlainMessage`\<[`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)\> |
| `b` | `undefined` \| [`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md) \| `PlainMessage`\<[`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/work_orders.scailo_pb.ts:2245

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)

#### Defined in

src/work_orders.scailo_pb.ts:2233

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)

#### Defined in

src/work_orders.scailo_pb.ts:2237

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrderRequirementStatisticsList`](WorkOrderRequirementStatisticsList.md)

#### Defined in

src/work_orders.scailo_pb.ts:2241
