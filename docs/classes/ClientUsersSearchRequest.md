[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientUsersSearchRequest

# Class: ClientUsersSearchRequest

Request payload structure used to search and filter Client User records.
Supports pagination controls, tenancy isolation, status grouping, and text-based matching.

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

[src/clients.scailo_pb.ts:2107](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2107)

## Properties

### associateId

• `Optional` **associateId**: `bigint`

**`Optional`**

**`Description`**

Filter by a specific associate internal ID.

**`Example`**

```ts
9012
```

**`Generated`**

from field: optional uint64 associate_id = 12;

#### Defined in

[src/clients.scailo_pb.ts:2089](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2089)

___

### clientId

• `Optional` **clientId**: `bigint`

**`Optional`**

**`Description`**

Filter by a specific client internal ID.

**`Example`**

```ts
1024
```

**`Generated`**

from field: optional uint64 client_id = 10;

#### Defined in

[src/clients.scailo_pb.ts:2065](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2065)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/clients.scailo_pb.ts:2009](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2009)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 6;

#### Defined in

[src/clients.scailo_pb.ts:2041](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2041)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/clients.scailo_pb.ts:1993](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1993)

___

### offset

• `Optional` **offset**: `bigint`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 offset = 3;

#### Defined in

[src/clients.scailo_pb.ts:2025](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2025)

___

### searchKey

• `Optional` **searchKey**: `string`

**`Optional`**

**`Description`**

Alphanumeric key phrase or keyword token used to perform lookup matches across searchable fields like names or comments.

**`Example`**

```ts
"John Doe"
```

**`Regex`**

.*

**`Format`**

String value, can be empty.

**`Generated`**

from field: optional string search_key = 20;

#### Defined in

[src/clients.scailo_pb.ts:2105](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2105)

___

### status

• `Optional` **status**: [`CLIENT_USER_STATUS`](../enums/CLIENT_USER_STATUS.md)

**`Optional`**

**`Description`**

Filter records by their verification lifecycle state (e.g., Approved, Unapproved). Defaults to unspecified/any.

**`Example`**

```ts
CLIENT_USER_STATUS_APPROVED
```

**`Generated`**

from field: optional Scailo.CLIENT_USER_STATUS status = 7;

#### Defined in

[src/clients.scailo_pb.ts:2053](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2053)

___

### userId

• `Optional` **userId**: `bigint`

**`Optional`**

**`Description`**

Filter by a specific user internal ID.

**`Example`**

```ts
5678
```

**`Generated`**

from field: optional uint64 user_id = 11;

#### Defined in

[src/clients.scailo_pb.ts:2077](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2077)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:2114](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2114)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:2112](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2112)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientUsersSearchRequest"``

#### Defined in

[src/clients.scailo_pb.ts:2113](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2113)

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

[src/clients.scailo_pb.ts:2138](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2138)

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

[src/clients.scailo_pb.ts:2126](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2126)

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

[src/clients.scailo_pb.ts:2130](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2130)

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

[src/clients.scailo_pb.ts:2134](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L2134)
