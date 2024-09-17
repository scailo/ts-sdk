[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GiXRelayReqWithoutBody

# Class: GiXRelayReqWithoutBody

Describes the message that is required to execute a RELAY instruction for GET, DELETE and HEAD requests (without payload body)

**`Generated`**

from message Scailo.GiXRelayReqWithoutBody

## Hierarchy

- `Message`\<[`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)\>

  ↳ **`GiXRelayReqWithoutBody`**

## Table of contents

### Constructors

- [constructor](GiXRelayReqWithoutBody.md#constructor)

### Properties

- [relayAcceptHeader](GiXRelayReqWithoutBody.md#relayacceptheader)
- [relayContentTypeHeader](GiXRelayReqWithoutBody.md#relaycontenttypeheader)
- [relayHeaders](GiXRelayReqWithoutBody.md#relayheaders)
- [url](GiXRelayReqWithoutBody.md#url)
- [uuid](GiXRelayReqWithoutBody.md#uuid)
- [fields](GiXRelayReqWithoutBody.md#fields)
- [runtime](GiXRelayReqWithoutBody.md#runtime)
- [typeName](GiXRelayReqWithoutBody.md#typename)

### Methods

- [clone](GiXRelayReqWithoutBody.md#clone)
- [equals](GiXRelayReqWithoutBody.md#equals)
- [fromBinary](GiXRelayReqWithoutBody.md#frombinary)
- [fromJson](GiXRelayReqWithoutBody.md#fromjson)
- [fromJsonString](GiXRelayReqWithoutBody.md#fromjsonstring)
- [getType](GiXRelayReqWithoutBody.md#gettype)
- [toBinary](GiXRelayReqWithoutBody.md#tobinary)
- [toJSON](GiXRelayReqWithoutBody.md#tojson)
- [toJson](GiXRelayReqWithoutBody.md#tojson-1)
- [toJsonString](GiXRelayReqWithoutBody.md#tojsonstring)
- [equals](GiXRelayReqWithoutBody.md#equals-1)
- [fromBinary](GiXRelayReqWithoutBody.md#frombinary-1)
- [fromJson](GiXRelayReqWithoutBody.md#fromjson-1)
- [fromJsonString](GiXRelayReqWithoutBody.md#fromjsonstring-1)

## Constructors

### constructor

• **new GiXRelayReqWithoutBody**(`data?`): [`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)\> |

#### Returns

[`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)

#### Overrides

Message\&lt;GiXRelayReqWithoutBody\&gt;.constructor

#### Defined in

src/vault_services.scailo_pb.ts:153

## Properties

### relayAcceptHeader

• **relayAcceptHeader**: `string` = `""`

The accept header of the relay request (e.g., 'application/json', 'text/html')

**`Generated`**

from field: string relay_accept_header = 5;

#### Defined in

src/vault_services.scailo_pb.ts:137

___

### relayContentTypeHeader

• **relayContentTypeHeader**: `string` = `""`

The content type header of the relay request (e.g., 'application/json', 'text/html')

**`Generated`**

from field: string relay_content_type_header = 4;

#### Defined in

src/vault_services.scailo_pb.ts:130

___

### relayHeaders

• **relayHeaders**: [`GiXRelayHeader`](GiXRelayHeader.md)[] = `[]`

The list of additional headers that will be relayed to the remote URL

**`Generated`**

from field: repeated Scailo.GiXRelayHeader relay_headers = 10;

#### Defined in

src/vault_services.scailo_pb.ts:144

___

### url

• **url**: `string` = `""`

The remote URL that needs to be accessed

**`Generated`**

from field: string url = 20;

#### Defined in

src/vault_services.scailo_pb.ts:151

___

### uuid

• **uuid**: `string` = `""`

The UUID of the app execution

**`Generated`**

from field: string uuid = 1;

#### Defined in

src/vault_services.scailo_pb.ts:123

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_services.scailo_pb.ts:160

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_services.scailo_pb.ts:158

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GiXRelayReqWithoutBody"``

#### Defined in

src/vault_services.scailo_pb.ts:159

## Methods

### clone

▸ **clone**(): [`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)

Create a deep copy.

#### Returns

[`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)

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
| `other` | `undefined` \| ``null`` \| [`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md) \| `PlainMessage`\<[`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)\> |

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

▸ **getType**(): `MessageType`\<[`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)\>

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
| `a` | `undefined` \| [`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md) \| `PlainMessage`\<[`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)\> |
| `b` | `undefined` \| [`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md) \| `PlainMessage`\<[`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_services.scailo_pb.ts:180

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)

#### Defined in

src/vault_services.scailo_pb.ts:168

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)

#### Defined in

src/vault_services.scailo_pb.ts:172

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXRelayReqWithoutBody`](GiXRelayReqWithoutBody.md)

#### Defined in

src/vault_services.scailo_pb.ts:176
