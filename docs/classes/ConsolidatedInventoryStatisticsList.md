[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ConsolidatedInventoryStatisticsList

# Class: ConsolidatedInventoryStatisticsList

**`Generated`**

from message Scailo.ConsolidatedInventoryStatisticsList

## Hierarchy

- `Message`\<[`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)\>

  ↳ **`ConsolidatedInventoryStatisticsList`**

## Table of contents

### Constructors

- [constructor](ConsolidatedInventoryStatisticsList.md#constructor)

### Properties

- [list](ConsolidatedInventoryStatisticsList.md#list)
- [fields](ConsolidatedInventoryStatisticsList.md#fields)
- [runtime](ConsolidatedInventoryStatisticsList.md#runtime)
- [typeName](ConsolidatedInventoryStatisticsList.md#typename)

### Methods

- [clone](ConsolidatedInventoryStatisticsList.md#clone)
- [equals](ConsolidatedInventoryStatisticsList.md#equals)
- [fromBinary](ConsolidatedInventoryStatisticsList.md#frombinary)
- [fromJson](ConsolidatedInventoryStatisticsList.md#fromjson)
- [fromJsonString](ConsolidatedInventoryStatisticsList.md#fromjsonstring)
- [getType](ConsolidatedInventoryStatisticsList.md#gettype)
- [toBinary](ConsolidatedInventoryStatisticsList.md#tobinary)
- [toJSON](ConsolidatedInventoryStatisticsList.md#tojson)
- [toJson](ConsolidatedInventoryStatisticsList.md#tojson-1)
- [toJsonString](ConsolidatedInventoryStatisticsList.md#tojsonstring)
- [equals](ConsolidatedInventoryStatisticsList.md#equals-1)
- [fromBinary](ConsolidatedInventoryStatisticsList.md#frombinary-1)
- [fromJson](ConsolidatedInventoryStatisticsList.md#fromjson-1)
- [fromJsonString](ConsolidatedInventoryStatisticsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ConsolidatedInventoryStatisticsList**(`data?`): [`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)\> |

#### Returns

[`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)

#### Overrides

Message\&lt;ConsolidatedInventoryStatisticsList\&gt;.constructor

#### Defined in

[src/inventory.scailo_pb.ts:1492](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/inventory.scailo_pb.ts#L1492)

## Properties

### list

• **list**: [`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.ConsolidatedInventoryStatistics list = 1;

#### Defined in

[src/inventory.scailo_pb.ts:1490](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/inventory.scailo_pb.ts#L1490)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inventory.scailo_pb.ts:1499](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/inventory.scailo_pb.ts#L1499)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inventory.scailo_pb.ts:1497](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/inventory.scailo_pb.ts#L1497)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ConsolidatedInventoryStatisticsList"``

#### Defined in

[src/inventory.scailo_pb.ts:1498](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/inventory.scailo_pb.ts#L1498)

## Methods

### clone

▸ **clone**(): [`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)

Create a deep copy.

#### Returns

[`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md) \| `PlainMessage`\<[`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)\>

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
| `a` | `undefined` \| [`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md) \| `PlainMessage`\<[`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)\> |
| `b` | `undefined` \| [`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md) \| `PlainMessage`\<[`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inventory.scailo_pb.ts:1515](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/inventory.scailo_pb.ts#L1515)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)

#### Defined in

[src/inventory.scailo_pb.ts:1503](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/inventory.scailo_pb.ts#L1503)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)

#### Defined in

[src/inventory.scailo_pb.ts:1507](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/inventory.scailo_pb.ts#L1507)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ConsolidatedInventoryStatisticsList`](ConsolidatedInventoryStatisticsList.md)

#### Defined in

[src/inventory.scailo_pb.ts:1511](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/inventory.scailo_pb.ts#L1511)
