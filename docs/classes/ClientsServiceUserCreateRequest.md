[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceUserCreateRequest

# Class: ClientsServiceUserCreateRequest

Request message for creating a new client user association.
This message encapsulates the necessary identifiers to link a user (and optionally an associate)
to a client, along with compliance details and audit logs required for record initialization.

**Note:** This serves as the primary entry point for managing client personnel, ensuring
that the relationship between the client and the user is properly audited and validated.

**`Generated`**

from message Scailo.ClientsServiceUserCreateRequest

## Hierarchy

- `Message`\<[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)\>

  ↳ **`ClientsServiceUserCreateRequest`**

## Table of contents

### Constructors

- [constructor](ClientsServiceUserCreateRequest.md#constructor)

### Properties

- [associateId](ClientsServiceUserCreateRequest.md#associateid)
- [clientId](ClientsServiceUserCreateRequest.md#clientid)
- [userComment](ClientsServiceUserCreateRequest.md#usercomment)
- [userId](ClientsServiceUserCreateRequest.md#userid)
- [fields](ClientsServiceUserCreateRequest.md#fields)
- [runtime](ClientsServiceUserCreateRequest.md#runtime)
- [typeName](ClientsServiceUserCreateRequest.md#typename)

### Methods

- [clone](ClientsServiceUserCreateRequest.md#clone)
- [equals](ClientsServiceUserCreateRequest.md#equals)
- [fromBinary](ClientsServiceUserCreateRequest.md#frombinary)
- [fromJson](ClientsServiceUserCreateRequest.md#fromjson)
- [fromJsonString](ClientsServiceUserCreateRequest.md#fromjsonstring)
- [getType](ClientsServiceUserCreateRequest.md#gettype)
- [toBinary](ClientsServiceUserCreateRequest.md#tobinary)
- [toJSON](ClientsServiceUserCreateRequest.md#tojson)
- [toJson](ClientsServiceUserCreateRequest.md#tojson-1)
- [toJsonString](ClientsServiceUserCreateRequest.md#tojsonstring)
- [equals](ClientsServiceUserCreateRequest.md#equals-1)
- [fromBinary](ClientsServiceUserCreateRequest.md#frombinary-1)
- [fromJson](ClientsServiceUserCreateRequest.md#fromjson-1)
- [fromJsonString](ClientsServiceUserCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServiceUserCreateRequest**(`data?`): [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)\> |

#### Returns

[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Overrides

Message\&lt;ClientsServiceUserCreateRequest\&gt;.constructor

#### Defined in

[src/clients.scailo_pb.ts:1779](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L1779)

## Properties

### associateId

• `Optional` **associateId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of an associated secondary entity or associate party, if applicable.

**`Example`**

```ts
9012
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer. Defaults to 0 if unassigned.

**`Generated`**

from field: optional uint64 associate_id = 12;

#### Defined in

[src/clients.scailo_pb.ts:1777](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L1777)

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target client to which the user will be associated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer greater than zero.

**`Generated`**

from field: uint64 client_id = 10;

#### Defined in

[src/clients.scailo_pb.ts:1745](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L1745)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

[src/clients.scailo_pb.ts:1729](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L1729)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the user being assigned to the client.

**`Example`**

```ts
5678
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer greater than zero.

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/clients.scailo_pb.ts:1761](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L1761)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:1786](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L1786)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:1784](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L1784)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServiceUserCreateRequest"``

#### Defined in

[src/clients.scailo_pb.ts:1785](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L1785)

## Methods

### clone

▸ **clone**(): [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

Create a deep copy.

#### Returns

[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md) \| `PlainMessage`\<[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)\>

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
| `a` | `undefined` \| [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md) \| `PlainMessage`\<[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)\> |
| `b` | `undefined` \| [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md) \| `PlainMessage`\<[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients.scailo_pb.ts:1805](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L1805)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:1793](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L1793)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:1797](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L1797)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:1801](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L1801)
