[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / GiXAppRunsList

# Class: GiXAppRunsList

Describes the message consisting of the list of gix app runs

**`Generated`**

from message Scailo.GiXAppRunsList

## Hierarchy

- `Message`\<[`GiXAppRunsList`](GiXAppRunsList.md)\>

  ↳ **`GiXAppRunsList`**

## Table of contents

### Constructors

- [constructor](GiXAppRunsList.md#constructor)

### Properties

- [list](GiXAppRunsList.md#list)
- [fields](GiXAppRunsList.md#fields)
- [runtime](GiXAppRunsList.md#runtime)
- [typeName](GiXAppRunsList.md#typename)

### Methods

- [clone](GiXAppRunsList.md#clone)
- [equals](GiXAppRunsList.md#equals)
- [fromBinary](GiXAppRunsList.md#frombinary)
- [fromJson](GiXAppRunsList.md#fromjson)
- [fromJsonString](GiXAppRunsList.md#fromjsonstring)
- [getType](GiXAppRunsList.md#gettype)
- [toBinary](GiXAppRunsList.md#tobinary)
- [toJSON](GiXAppRunsList.md#tojson)
- [toJson](GiXAppRunsList.md#tojson-1)
- [toJsonString](GiXAppRunsList.md#tojsonstring)
- [equals](GiXAppRunsList.md#equals-1)
- [fromBinary](GiXAppRunsList.md#frombinary-1)
- [fromJson](GiXAppRunsList.md#fromjson-1)
- [fromJsonString](GiXAppRunsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new GiXAppRunsList**(`data?`): [`GiXAppRunsList`](GiXAppRunsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GiXAppRunsList`](GiXAppRunsList.md)\> |

#### Returns

[`GiXAppRunsList`](GiXAppRunsList.md)

#### Overrides

Message\&lt;GiXAppRunsList\&gt;.constructor

#### Defined in

src/vault_commons.scailo_pb.ts:760

## Properties

### list

• **list**: [`GiXAppRun`](GiXAppRun.md)[] = `[]`

List of runs

**`Generated`**

from field: repeated Scailo.GiXAppRun list = 1;

#### Defined in

src/vault_commons.scailo_pb.ts:758

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_commons.scailo_pb.ts:767

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_commons.scailo_pb.ts:765

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GiXAppRunsList"``

#### Defined in

src/vault_commons.scailo_pb.ts:766

## Methods

### clone

▸ **clone**(): [`GiXAppRunsList`](GiXAppRunsList.md)

Create a deep copy.

#### Returns

[`GiXAppRunsList`](GiXAppRunsList.md)

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
| `other` | `undefined` \| ``null`` \| [`GiXAppRunsList`](GiXAppRunsList.md) \| `PlainMessage`\<[`GiXAppRunsList`](GiXAppRunsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`GiXAppRunsList`](GiXAppRunsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GiXAppRunsList`](GiXAppRunsList.md)\>

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
| `a` | `undefined` \| [`GiXAppRunsList`](GiXAppRunsList.md) \| `PlainMessage`\<[`GiXAppRunsList`](GiXAppRunsList.md)\> |
| `b` | `undefined` \| [`GiXAppRunsList`](GiXAppRunsList.md) \| `PlainMessage`\<[`GiXAppRunsList`](GiXAppRunsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_commons.scailo_pb.ts:783

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GiXAppRunsList`](GiXAppRunsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GiXAppRunsList`](GiXAppRunsList.md)

#### Defined in

src/vault_commons.scailo_pb.ts:771

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GiXAppRunsList`](GiXAppRunsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXAppRunsList`](GiXAppRunsList.md)

#### Defined in

src/vault_commons.scailo_pb.ts:775

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GiXAppRunsList`](GiXAppRunsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXAppRunsList`](GiXAppRunsList.md)

#### Defined in

src/vault_commons.scailo_pb.ts:779
