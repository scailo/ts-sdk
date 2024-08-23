[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / GiXRelayResponse

# Class: GiXRelayResponse

Describes the payload that will be returned to the GiX Relay RPC

**`Generated`**

from message Scailo.GiXRelayResponse

## Hierarchy

- `Message`\<[`GiXRelayResponse`](GiXRelayResponse.md)\>

  ↳ **`GiXRelayResponse`**

## Table of contents

### Constructors

- [constructor](GiXRelayResponse.md#constructor)

### Properties

- [body](GiXRelayResponse.md#body)
- [uuid](GiXRelayResponse.md#uuid)
- [fields](GiXRelayResponse.md#fields)
- [runtime](GiXRelayResponse.md#runtime)
- [typeName](GiXRelayResponse.md#typename)

### Methods

- [clone](GiXRelayResponse.md#clone)
- [equals](GiXRelayResponse.md#equals)
- [fromBinary](GiXRelayResponse.md#frombinary)
- [fromJson](GiXRelayResponse.md#fromjson)
- [fromJsonString](GiXRelayResponse.md#fromjsonstring)
- [getType](GiXRelayResponse.md#gettype)
- [toBinary](GiXRelayResponse.md#tobinary)
- [toJSON](GiXRelayResponse.md#tojson)
- [toJson](GiXRelayResponse.md#tojson-1)
- [toJsonString](GiXRelayResponse.md#tojsonstring)
- [equals](GiXRelayResponse.md#equals-1)
- [fromBinary](GiXRelayResponse.md#frombinary-1)
- [fromJson](GiXRelayResponse.md#fromjson-1)
- [fromJsonString](GiXRelayResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new GiXRelayResponse**(`data?`): [`GiXRelayResponse`](GiXRelayResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GiXRelayResponse`](GiXRelayResponse.md)\> |

#### Returns

[`GiXRelayResponse`](GiXRelayResponse.md)

#### Overrides

Message\&lt;GiXRelayResponse\&gt;.constructor

#### Defined in

src/vault_services.scailo_pb.ts:288

## Properties

### body

• **body**: `Uint8Array`

The response from the remote URL

**`Generated`**

from field: bytes body = 10;

#### Defined in

src/vault_services.scailo_pb.ts:286

___

### uuid

• **uuid**: `string` = `""`

The UUID of the app execution

**`Generated`**

from field: string uuid = 1;

#### Defined in

src/vault_services.scailo_pb.ts:279

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_services.scailo_pb.ts:295

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_services.scailo_pb.ts:293

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GiXRelayResponse"``

#### Defined in

src/vault_services.scailo_pb.ts:294

## Methods

### clone

▸ **clone**(): [`GiXRelayResponse`](GiXRelayResponse.md)

Create a deep copy.

#### Returns

[`GiXRelayResponse`](GiXRelayResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`GiXRelayResponse`](GiXRelayResponse.md) \| `PlainMessage`\<[`GiXRelayResponse`](GiXRelayResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`GiXRelayResponse`](GiXRelayResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GiXRelayResponse`](GiXRelayResponse.md)\>

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
| `a` | `undefined` \| [`GiXRelayResponse`](GiXRelayResponse.md) \| `PlainMessage`\<[`GiXRelayResponse`](GiXRelayResponse.md)\> |
| `b` | `undefined` \| [`GiXRelayResponse`](GiXRelayResponse.md) \| `PlainMessage`\<[`GiXRelayResponse`](GiXRelayResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_services.scailo_pb.ts:312

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GiXRelayResponse`](GiXRelayResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GiXRelayResponse`](GiXRelayResponse.md)

#### Defined in

src/vault_services.scailo_pb.ts:300

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GiXRelayResponse`](GiXRelayResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXRelayResponse`](GiXRelayResponse.md)

#### Defined in

src/vault_services.scailo_pb.ts:304

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GiXRelayResponse`](GiXRelayResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXRelayResponse`](GiXRelayResponse.md)

#### Defined in

src/vault_services.scailo_pb.ts:308
