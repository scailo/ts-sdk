[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveDomainAddRequest

# Class: EnclaveDomainAddRequest

Stores the payload that is necessary to create a custom domain for an enclave

**`Generated`**

from message Scailo.EnclaveDomainAddRequest

## Hierarchy

- `Message`\<[`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)\>

  ↳ **`EnclaveDomainAddRequest`**

## Table of contents

### Constructors

- [constructor](EnclaveDomainAddRequest.md#constructor)

### Properties

- [domain](EnclaveDomainAddRequest.md#domain)
- [fileUuid](EnclaveDomainAddRequest.md#fileuuid)
- [fields](EnclaveDomainAddRequest.md#fields)
- [runtime](EnclaveDomainAddRequest.md#runtime)
- [typeName](EnclaveDomainAddRequest.md#typename)

### Methods

- [clone](EnclaveDomainAddRequest.md#clone)
- [equals](EnclaveDomainAddRequest.md#equals)
- [fromBinary](EnclaveDomainAddRequest.md#frombinary)
- [fromJson](EnclaveDomainAddRequest.md#fromjson)
- [fromJsonString](EnclaveDomainAddRequest.md#fromjsonstring)
- [getType](EnclaveDomainAddRequest.md#gettype)
- [toBinary](EnclaveDomainAddRequest.md#tobinary)
- [toJSON](EnclaveDomainAddRequest.md#tojson)
- [toJson](EnclaveDomainAddRequest.md#tojson-1)
- [toJsonString](EnclaveDomainAddRequest.md#tojsonstring)
- [equals](EnclaveDomainAddRequest.md#equals-1)
- [fromBinary](EnclaveDomainAddRequest.md#frombinary-1)
- [fromJson](EnclaveDomainAddRequest.md#fromjson-1)
- [fromJsonString](EnclaveDomainAddRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveDomainAddRequest**(`data?`): [`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)\> |

#### Returns

[`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)

#### Overrides

Message\&lt;EnclaveDomainAddRequest\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:2060](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/vault_commons.scailo_pb.ts#L2060)

## Properties

### domain

• **domain**: `string` = `""`

The domain that points to the enclave

**`Generated`**

from field: string domain = 11;

#### Defined in

[src/vault_commons.scailo_pb.ts:2058](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/vault_commons.scailo_pb.ts#L2058)

___

### fileUuid

• **fileUuid**: `string` = `""`

The UUID of the enclave file that will be updated with the given domain

**`Generated`**

from field: string file_uuid = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:2051](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/vault_commons.scailo_pb.ts#L2051)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:2067](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/vault_commons.scailo_pb.ts#L2067)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:2065](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/vault_commons.scailo_pb.ts#L2065)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveDomainAddRequest"``

#### Defined in

[src/vault_commons.scailo_pb.ts:2066](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/vault_commons.scailo_pb.ts#L2066)

## Methods

### clone

▸ **clone**(): [`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)

Create a deep copy.

#### Returns

[`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md) \| `PlainMessage`\<[`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)\>

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
| `a` | `undefined` \| [`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md) \| `PlainMessage`\<[`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)\> |
| `b` | `undefined` \| [`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md) \| `PlainMessage`\<[`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:2084](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/vault_commons.scailo_pb.ts#L2084)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2072](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/vault_commons.scailo_pb.ts#L2072)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2076](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/vault_commons.scailo_pb.ts#L2076)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveDomainAddRequest`](EnclaveDomainAddRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2080](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/vault_commons.scailo_pb.ts#L2080)
