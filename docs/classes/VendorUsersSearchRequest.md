[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorUsersSearchRequest

# Class: VendorUsersSearchRequest

Request payload structure used to search and filter Vendor User records.
Supports pagination controls, tenancy isolation, status grouping, and text-based matching.

**`Generated`**

from message Scailo.VendorUsersSearchRequest

## Hierarchy

- `Message`\<[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)\>

  ↳ **`VendorUsersSearchRequest`**

## Table of contents

### Constructors

- [constructor](VendorUsersSearchRequest.md#constructor)

### Properties

- [associateId](VendorUsersSearchRequest.md#associateid)
- [count](VendorUsersSearchRequest.md#count)
- [entityUuid](VendorUsersSearchRequest.md#entityuuid)
- [isActive](VendorUsersSearchRequest.md#isactive)
- [offset](VendorUsersSearchRequest.md#offset)
- [searchKey](VendorUsersSearchRequest.md#searchkey)
- [status](VendorUsersSearchRequest.md#status)
- [userId](VendorUsersSearchRequest.md#userid)
- [vendorId](VendorUsersSearchRequest.md#vendorid)
- [fields](VendorUsersSearchRequest.md#fields)
- [runtime](VendorUsersSearchRequest.md#runtime)
- [typeName](VendorUsersSearchRequest.md#typename)

### Methods

- [clone](VendorUsersSearchRequest.md#clone)
- [equals](VendorUsersSearchRequest.md#equals)
- [fromBinary](VendorUsersSearchRequest.md#frombinary)
- [fromJson](VendorUsersSearchRequest.md#fromjson)
- [fromJsonString](VendorUsersSearchRequest.md#fromjsonstring)
- [getType](VendorUsersSearchRequest.md#gettype)
- [toBinary](VendorUsersSearchRequest.md#tobinary)
- [toJSON](VendorUsersSearchRequest.md#tojson)
- [toJson](VendorUsersSearchRequest.md#tojson-1)
- [toJsonString](VendorUsersSearchRequest.md#tojsonstring)
- [equals](VendorUsersSearchRequest.md#equals-1)
- [fromBinary](VendorUsersSearchRequest.md#frombinary-1)
- [fromJson](VendorUsersSearchRequest.md#fromjson-1)
- [fromJsonString](VendorUsersSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorUsersSearchRequest**(`data?`): [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)\> |

#### Returns

[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Overrides

Message\&lt;VendorUsersSearchRequest\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:3675](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3675)

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

[src/vendors.scailo_pb.ts:3657](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3657)

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

[src/vendors.scailo_pb.ts:3577](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3577)

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

[src/vendors.scailo_pb.ts:3609](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3609)

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

[src/vendors.scailo_pb.ts:3561](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3561)

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

[src/vendors.scailo_pb.ts:3593](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3593)

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

[src/vendors.scailo_pb.ts:3673](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3673)

___

### status

• `Optional` **status**: [`VENDOR_USER_STATUS`](../enums/VENDOR_USER_STATUS.md)

**`Optional`**

**`Description`**

Filter records by their verification lifecycle state (e.g., Approved, Unapproved). Defaults to unspecified/any.

**`Example`**

```ts
VENDOR_USER_STATUS_APPROVED
```

**`Generated`**

from field: optional Scailo.VENDOR_USER_STATUS status = 7;

#### Defined in

[src/vendors.scailo_pb.ts:3621](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3621)

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

[src/vendors.scailo_pb.ts:3645](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3645)

___

### vendorId

• `Optional` **vendorId**: `bigint`

**`Optional`**

**`Description`**

Filter by a specific vendor internal ID.

**`Example`**

```ts
1024
```

**`Generated`**

from field: optional uint64 vendor_id = 10;

#### Defined in

[src/vendors.scailo_pb.ts:3633](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3633)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:3682](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3682)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:3680](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3680)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorUsersSearchRequest"``

#### Defined in

[src/vendors.scailo_pb.ts:3681](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3681)

## Methods

### clone

▸ **clone**(): [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

Create a deep copy.

#### Returns

[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md) \| `PlainMessage`\<[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)\>

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
| `a` | `undefined` \| [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md) \| `PlainMessage`\<[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)\> |
| `b` | `undefined` \| [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md) \| `PlainMessage`\<[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:3706](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3706)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:3694](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3694)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:3698](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3698)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:3702](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3702)
