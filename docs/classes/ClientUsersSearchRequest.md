[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientUsersSearchRequest

# Class: ClientUsersSearchRequest

Describes the request payload to search client users

**`Generated`**

from message Scailo.ClientUsersSearchRequest

## Hierarchy

- `Message`\<[`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)\>

  ↳ **`ClientUsersSearchRequest`**

## Table of contents

### Constructors

- [constructor](ClientUsersSearchRequest.md#constructor)

### Properties

- [associateId](ClientUsersSearchRequest.md#associateid)
- [clientId](ClientUsersSearchRequest.md#clientid)
- [count](ClientUsersSearchRequest.md#count)
- [entityUuid](ClientUsersSearchRequest.md#entityuuid)
- [isActive](ClientUsersSearchRequest.md#isactive)
- [offset](ClientUsersSearchRequest.md#offset)
- [searchKey](ClientUsersSearchRequest.md#searchkey)
- [status](ClientUsersSearchRequest.md#status)
- [userId](ClientUsersSearchRequest.md#userid)
- [fields](ClientUsersSearchRequest.md#fields)
- [runtime](ClientUsersSearchRequest.md#runtime)
- [typeName](ClientUsersSearchRequest.md#typename)

### Methods

- [clone](ClientUsersSearchRequest.md#clone)
- [equals](ClientUsersSearchRequest.md#equals)
- [fromBinary](ClientUsersSearchRequest.md#frombinary)
- [fromJson](ClientUsersSearchRequest.md#fromjson)
- [fromJsonString](ClientUsersSearchRequest.md#fromjsonstring)
- [getType](ClientUsersSearchRequest.md#gettype)
- [toBinary](ClientUsersSearchRequest.md#tobinary)
- [toJSON](ClientUsersSearchRequest.md#tojson)
- [toJson](ClientUsersSearchRequest.md#tojson-1)
- [toJsonString](ClientUsersSearchRequest.md#tojsonstring)
- [equals](ClientUsersSearchRequest.md#equals-1)
- [fromBinary](ClientUsersSearchRequest.md#frombinary-1)
- [fromJson](ClientUsersSearchRequest.md#fromjson-1)
- [fromJsonString](ClientUsersSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientUsersSearchRequest**(`data?`): [`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)\> |

#### Returns

[`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)

#### Overrides

Message\&lt;ClientUsersSearchRequest\&gt;.constructor

#### Defined in

[src/clients.scailo_pb.ts:1748](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1748)

## Properties

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores an optional associate ID

**`Generated`**

from field: uint64 associate_id = 12;

#### Defined in

[src/clients.scailo_pb.ts:1739](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1739)

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

Stores the client ID

**`Generated`**

from field: uint64 client_id = 10;

#### Defined in

[src/clients.scailo_pb.ts:1725](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1725)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/clients.scailo_pb.ts:1688](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1688)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/clients.scailo_pb.ts:1711](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1711)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/clients.scailo_pb.ts:1681](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1681)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/clients.scailo_pb.ts:1695](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1695)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 20;

#### Defined in

[src/clients.scailo_pb.ts:1746](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1746)

___

### status

• **status**: [`CLIENT_USER_STATUS`](../enums/CLIENT_USER_STATUS.md) = `CLIENT_USER_STATUS.CLIENT_USER_STATUS_ANY_UNSPECIFIED`

The status of the users

**`Generated`**

from field: Scailo.CLIENT_USER_STATUS status = 7;

#### Defined in

[src/clients.scailo_pb.ts:1718](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1718)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

Stores the user ID

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/clients.scailo_pb.ts:1732](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1732)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:1755](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1755)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:1753](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1753)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientUsersSearchRequest"``

#### Defined in

[src/clients.scailo_pb.ts:1754](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1754)

## Methods

### clone

▸ **clone**(): [`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)

Create a deep copy.

#### Returns

[`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientUsersSearchRequest`](ClientUsersSearchRequest.md) \| `PlainMessage`\<[`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)\>

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
| `a` | `undefined` \| [`ClientUsersSearchRequest`](ClientUsersSearchRequest.md) \| `PlainMessage`\<[`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)\> |
| `b` | `undefined` \| [`ClientUsersSearchRequest`](ClientUsersSearchRequest.md) \| `PlainMessage`\<[`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients.scailo_pb.ts:1779](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1779)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:1767](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1767)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:1771](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1771)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientUsersSearchRequest`](ClientUsersSearchRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:1775](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1775)
