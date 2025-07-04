[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MagicLinkAccessLogsList

# Class: MagicLinkAccessLogsList

Describes the message consisting of the list of access logs

**`Generated`**

from message Scailo.MagicLinkAccessLogsList

## Hierarchy

- `Message`\<[`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)\>

  ↳ **`MagicLinkAccessLogsList`**

## Table of contents

### Constructors

- [constructor](MagicLinkAccessLogsList.md#constructor)

### Properties

- [list](MagicLinkAccessLogsList.md#list)
- [fields](MagicLinkAccessLogsList.md#fields)
- [runtime](MagicLinkAccessLogsList.md#runtime)
- [typeName](MagicLinkAccessLogsList.md#typename)

### Methods

- [clone](MagicLinkAccessLogsList.md#clone)
- [equals](MagicLinkAccessLogsList.md#equals)
- [fromBinary](MagicLinkAccessLogsList.md#frombinary)
- [fromJson](MagicLinkAccessLogsList.md#fromjson)
- [fromJsonString](MagicLinkAccessLogsList.md#fromjsonstring)
- [getType](MagicLinkAccessLogsList.md#gettype)
- [toBinary](MagicLinkAccessLogsList.md#tobinary)
- [toJSON](MagicLinkAccessLogsList.md#tojson)
- [toJson](MagicLinkAccessLogsList.md#tojson-1)
- [toJsonString](MagicLinkAccessLogsList.md#tojsonstring)
- [equals](MagicLinkAccessLogsList.md#equals-1)
- [fromBinary](MagicLinkAccessLogsList.md#frombinary-1)
- [fromJson](MagicLinkAccessLogsList.md#fromjson-1)
- [fromJsonString](MagicLinkAccessLogsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new MagicLinkAccessLogsList**(`data?`): [`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)\> |

#### Returns

[`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)

#### Overrides

Message\&lt;MagicLinkAccessLogsList\&gt;.constructor

#### Defined in

src/magic_links.scailo_pb.ts:1158

## Properties

### list

• **list**: [`MagicLinkAccessLog`](MagicLinkAccessLog.md)[] = `[]`

List of access logs

**`Generated`**

from field: repeated Scailo.MagicLinkAccessLog list = 1;

#### Defined in

src/magic_links.scailo_pb.ts:1156

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/magic_links.scailo_pb.ts:1165

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/magic_links.scailo_pb.ts:1163

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MagicLinkAccessLogsList"``

#### Defined in

src/magic_links.scailo_pb.ts:1164

## Methods

### clone

▸ **clone**(): [`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)

Create a deep copy.

#### Returns

[`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)

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
| `other` | `undefined` \| ``null`` \| [`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md) \| `PlainMessage`\<[`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)\>

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
| `a` | `undefined` \| [`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md) \| `PlainMessage`\<[`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)\> |
| `b` | `undefined` \| [`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md) \| `PlainMessage`\<[`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/magic_links.scailo_pb.ts:1181

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)

#### Defined in

src/magic_links.scailo_pb.ts:1169

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)

#### Defined in

src/magic_links.scailo_pb.ts:1173

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinkAccessLogsList`](MagicLinkAccessLogsList.md)

#### Defined in

src/magic_links.scailo_pb.ts:1177
