[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GiXRelayReqWithBody

# Class: GiXRelayReqWithBody

Describes the message that is required to execute a RELAY instruction for POST, PUT and PATCH requests (with payload)

**`Generated`**

from message Scailo.GiXRelayReqWithBody

## Hierarchy

- `Message`\<[`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)\>

  ↳ **`GiXRelayReqWithBody`**

## Table of contents

### Constructors

- [constructor](GiXRelayReqWithBody.md#constructor)

### Properties

- [body](GiXRelayReqWithBody.md#body)
- [relayAcceptHeader](GiXRelayReqWithBody.md#relayacceptheader)
- [relayContentTypeHeader](GiXRelayReqWithBody.md#relaycontenttypeheader)
- [relayHeaders](GiXRelayReqWithBody.md#relayheaders)
- [url](GiXRelayReqWithBody.md#url)
- [uuid](GiXRelayReqWithBody.md#uuid)
- [fields](GiXRelayReqWithBody.md#fields)
- [runtime](GiXRelayReqWithBody.md#runtime)
- [typeName](GiXRelayReqWithBody.md#typename)

### Methods

- [clone](GiXRelayReqWithBody.md#clone)
- [equals](GiXRelayReqWithBody.md#equals)
- [fromBinary](GiXRelayReqWithBody.md#frombinary)
- [fromJson](GiXRelayReqWithBody.md#fromjson)
- [fromJsonString](GiXRelayReqWithBody.md#fromjsonstring)
- [getType](GiXRelayReqWithBody.md#gettype)
- [toBinary](GiXRelayReqWithBody.md#tobinary)
- [toJSON](GiXRelayReqWithBody.md#tojson)
- [toJson](GiXRelayReqWithBody.md#tojson-1)
- [toJsonString](GiXRelayReqWithBody.md#tojsonstring)
- [equals](GiXRelayReqWithBody.md#equals-1)
- [fromBinary](GiXRelayReqWithBody.md#frombinary-1)
- [fromJson](GiXRelayReqWithBody.md#fromjson-1)
- [fromJsonString](GiXRelayReqWithBody.md#fromjsonstring-1)

## Constructors

### constructor

• **new GiXRelayReqWithBody**(`data?`): [`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)\> |

#### Returns

[`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)

#### Overrides

Message\&lt;GiXRelayReqWithBody\&gt;.constructor

#### Defined in

src/vault.scailo_pb.ts:234

## Properties

### body

• **body**: `Uint8Array`

The body that needs to be relayed

**`Generated`**

from field: bytes body = 30;

#### Defined in

src/vault.scailo_pb.ts:232

___

### relayAcceptHeader

• **relayAcceptHeader**: `string` = `""`

The accept header of the relay request (e.g., 'application/json', 'text/html')

**`Generated`**

from field: string relay_accept_header = 5;

#### Defined in

src/vault.scailo_pb.ts:211

___

### relayContentTypeHeader

• **relayContentTypeHeader**: `string` = `""`

The content type header of the relay request (e.g., 'application/json', 'text/html')

**`Generated`**

from field: string relay_content_type_header = 4;

#### Defined in

src/vault.scailo_pb.ts:204

___

### relayHeaders

• **relayHeaders**: [`GiXRelayHeader`](GiXRelayHeader.md)[] = `[]`

The list of additional headers that will be relayed to the remote URL

**`Generated`**

from field: repeated Scailo.GiXRelayHeader relay_headers = 10;

#### Defined in

src/vault.scailo_pb.ts:218

___

### url

• **url**: `string` = `""`

The remote URL that needs to be accessed

**`Generated`**

from field: string url = 20;

#### Defined in

src/vault.scailo_pb.ts:225

___

### uuid

• **uuid**: `string` = `""`

The UUID of the app execution

**`Generated`**

from field: string uuid = 1;

#### Defined in

src/vault.scailo_pb.ts:197

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault.scailo_pb.ts:241

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault.scailo_pb.ts:239

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GiXRelayReqWithBody"``

#### Defined in

src/vault.scailo_pb.ts:240

## Methods

### clone

▸ **clone**(): [`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)

Create a deep copy.

#### Returns

[`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)

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
| `other` | `undefined` \| ``null`` \| [`GiXRelayReqWithBody`](GiXRelayReqWithBody.md) \| `PlainMessage`\<[`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)\> |

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

▸ **getType**(): `MessageType`\<[`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)\>

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
| `a` | `undefined` \| [`GiXRelayReqWithBody`](GiXRelayReqWithBody.md) \| `PlainMessage`\<[`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)\> |
| `b` | `undefined` \| [`GiXRelayReqWithBody`](GiXRelayReqWithBody.md) \| `PlainMessage`\<[`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault.scailo_pb.ts:262

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)

#### Defined in

src/vault.scailo_pb.ts:250

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)

#### Defined in

src/vault.scailo_pb.ts:254

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXRelayReqWithBody`](GiXRelayReqWithBody.md)

#### Defined in

src/vault.scailo_pb.ts:258
