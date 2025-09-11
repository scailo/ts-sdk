[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LocationsList

# Class: LocationsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.LocationsList

## Hierarchy

- `Message`\<[`LocationsList`](LocationsList.md)\>

  ↳ **`LocationsList`**

## Table of contents

### Constructors

- [constructor](LocationsList.md#constructor)

### Properties

- [list](LocationsList.md#list)
- [fields](LocationsList.md#fields)
- [runtime](LocationsList.md#runtime)
- [typeName](LocationsList.md#typename)

### Methods

- [clone](LocationsList.md#clone)
- [equals](LocationsList.md#equals)
- [fromBinary](LocationsList.md#frombinary)
- [fromJson](LocationsList.md#fromjson)
- [fromJsonString](LocationsList.md#fromjsonstring)
- [getType](LocationsList.md#gettype)
- [toBinary](LocationsList.md#tobinary)
- [toJSON](LocationsList.md#tojson)
- [toJson](LocationsList.md#tojson-1)
- [toJsonString](LocationsList.md#tojsonstring)
- [equals](LocationsList.md#equals-1)
- [fromBinary](LocationsList.md#frombinary-1)
- [fromJson](LocationsList.md#fromjson-1)
- [fromJsonString](LocationsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsList**(`data?`): [`LocationsList`](LocationsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LocationsList`](LocationsList.md)\> |

#### Returns

[`LocationsList`](LocationsList.md)

#### Overrides

Message\&lt;LocationsList\&gt;.constructor

#### Defined in

src/locations.scailo_pb.ts:447

## Properties

### list

• **list**: [`Location`](Location.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Location list = 1;

#### Defined in

src/locations.scailo_pb.ts:445

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/locations.scailo_pb.ts:454

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/locations.scailo_pb.ts:452

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LocationsList"``

#### Defined in

src/locations.scailo_pb.ts:453

## Methods

### clone

▸ **clone**(): [`LocationsList`](LocationsList.md)

Create a deep copy.

#### Returns

[`LocationsList`](LocationsList.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsList`](LocationsList.md) \| `PlainMessage`\<[`LocationsList`](LocationsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`LocationsList`](LocationsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LocationsList`](LocationsList.md)\>

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
| `a` | `undefined` \| [`LocationsList`](LocationsList.md) \| `PlainMessage`\<[`LocationsList`](LocationsList.md)\> |
| `b` | `undefined` \| [`LocationsList`](LocationsList.md) \| `PlainMessage`\<[`LocationsList`](LocationsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/locations.scailo_pb.ts:470

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsList`](LocationsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LocationsList`](LocationsList.md)

#### Defined in

src/locations.scailo_pb.ts:458

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsList`](LocationsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsList`](LocationsList.md)

#### Defined in

src/locations.scailo_pb.ts:462

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsList`](LocationsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsList`](LocationsList.md)

#### Defined in

src/locations.scailo_pb.ts:466
