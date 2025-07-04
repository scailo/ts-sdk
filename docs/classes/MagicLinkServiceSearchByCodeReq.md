[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MagicLinkServiceSearchByCodeReq

# Class: MagicLinkServiceSearchByCodeReq

Describes the request payload for retrieving the magic link information using the code

**`Generated`**

from message Scailo.MagicLinkServiceSearchByCodeReq

## Hierarchy

- `Message`\<[`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)\>

  ↳ **`MagicLinkServiceSearchByCodeReq`**

## Table of contents

### Constructors

- [constructor](MagicLinkServiceSearchByCodeReq.md#constructor)

### Properties

- [code](MagicLinkServiceSearchByCodeReq.md#code)
- [ipAddress](MagicLinkServiceSearchByCodeReq.md#ipaddress)
- [userAgent](MagicLinkServiceSearchByCodeReq.md#useragent)
- [fields](MagicLinkServiceSearchByCodeReq.md#fields)
- [runtime](MagicLinkServiceSearchByCodeReq.md#runtime)
- [typeName](MagicLinkServiceSearchByCodeReq.md#typename)

### Methods

- [clone](MagicLinkServiceSearchByCodeReq.md#clone)
- [equals](MagicLinkServiceSearchByCodeReq.md#equals)
- [fromBinary](MagicLinkServiceSearchByCodeReq.md#frombinary)
- [fromJson](MagicLinkServiceSearchByCodeReq.md#fromjson)
- [fromJsonString](MagicLinkServiceSearchByCodeReq.md#fromjsonstring)
- [getType](MagicLinkServiceSearchByCodeReq.md#gettype)
- [toBinary](MagicLinkServiceSearchByCodeReq.md#tobinary)
- [toJSON](MagicLinkServiceSearchByCodeReq.md#tojson)
- [toJson](MagicLinkServiceSearchByCodeReq.md#tojson-1)
- [toJsonString](MagicLinkServiceSearchByCodeReq.md#tojsonstring)
- [equals](MagicLinkServiceSearchByCodeReq.md#equals-1)
- [fromBinary](MagicLinkServiceSearchByCodeReq.md#frombinary-1)
- [fromJson](MagicLinkServiceSearchByCodeReq.md#fromjson-1)
- [fromJsonString](MagicLinkServiceSearchByCodeReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new MagicLinkServiceSearchByCodeReq**(`data?`): [`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)\> |

#### Returns

[`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)

#### Overrides

Message\&lt;MagicLinkServiceSearchByCodeReq\&gt;.constructor

#### Defined in

src/magic_links.scailo_pb.ts:1072

## Properties

### code

• **code**: `string` = `""`

The code that needs to be used to retrieve the magic link

**`Generated`**

from field: string code = 1;

#### Defined in

src/magic_links.scailo_pb.ts:1056

___

### ipAddress

• **ipAddress**: `string` = `""`

The IP address that is requesting the search (must be a valid IPv4 or IPv6 address)

**`Generated`**

from field: string ip_address = 2;

#### Defined in

src/magic_links.scailo_pb.ts:1063

___

### userAgent

• **userAgent**: `string` = `""`

The user agent information

**`Generated`**

from field: string user_agent = 3;

#### Defined in

src/magic_links.scailo_pb.ts:1070

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/magic_links.scailo_pb.ts:1079

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/magic_links.scailo_pb.ts:1077

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MagicLinkServiceSearchByCodeReq"``

#### Defined in

src/magic_links.scailo_pb.ts:1078

## Methods

### clone

▸ **clone**(): [`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)

Create a deep copy.

#### Returns

[`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)

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
| `other` | `undefined` \| ``null`` \| [`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md) \| `PlainMessage`\<[`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)\>

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
| `a` | `undefined` \| [`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md) \| `PlainMessage`\<[`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)\> |
| `b` | `undefined` \| [`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md) \| `PlainMessage`\<[`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/magic_links.scailo_pb.ts:1097

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)

#### Defined in

src/magic_links.scailo_pb.ts:1085

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)

#### Defined in

src/magic_links.scailo_pb.ts:1089

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinkServiceSearchByCodeReq`](MagicLinkServiceSearchByCodeReq.md)

#### Defined in

src/magic_links.scailo_pb.ts:1093
