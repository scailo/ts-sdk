[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UsersServiceSearchAllReq

# Class: UsersServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating users via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

**`Generated`**

from message Scailo.UsersServiceSearchAllReq

## Hierarchy

- `Message`\<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\>

  ↳ **`UsersServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](UsersServiceSearchAllReq.md#constructor)

### Properties

- [clientId](UsersServiceSearchAllReq.md#clientid)
- [count](UsersServiceSearchAllReq.md#count)
- [entityUuid](UsersServiceSearchAllReq.md#entityuuid)
- [isActive](UsersServiceSearchAllReq.md#isactive)
- [offset](UsersServiceSearchAllReq.md#offset)
- [searchKey](UsersServiceSearchAllReq.md#searchkey)
- [sortKey](UsersServiceSearchAllReq.md#sortkey)
- [sortOrder](UsersServiceSearchAllReq.md#sortorder)
- [status](UsersServiceSearchAllReq.md#status)
- [userType](UsersServiceSearchAllReq.md#usertype)
- [vendorId](UsersServiceSearchAllReq.md#vendorid)
- [fields](UsersServiceSearchAllReq.md#fields)
- [runtime](UsersServiceSearchAllReq.md#runtime)
- [typeName](UsersServiceSearchAllReq.md#typename)

### Methods

- [clone](UsersServiceSearchAllReq.md#clone)
- [equals](UsersServiceSearchAllReq.md#equals)
- [fromBinary](UsersServiceSearchAllReq.md#frombinary)
- [fromJson](UsersServiceSearchAllReq.md#fromjson)
- [fromJsonString](UsersServiceSearchAllReq.md#fromjsonstring)
- [getType](UsersServiceSearchAllReq.md#gettype)
- [toBinary](UsersServiceSearchAllReq.md#tobinary)
- [toJSON](UsersServiceSearchAllReq.md#tojson)
- [toJson](UsersServiceSearchAllReq.md#tojson-1)
- [toJsonString](UsersServiceSearchAllReq.md#tojsonstring)
- [equals](UsersServiceSearchAllReq.md#equals-1)
- [fromBinary](UsersServiceSearchAllReq.md#frombinary-1)
- [fromJson](UsersServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](UsersServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceSearchAllReq**(`data?`): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\> |

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Overrides

Message\&lt;UsersServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/users.scailo_pb.ts:3250](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3250)

## Properties

### clientId

• `Optional` **clientId**: `bigint`

**`Optional`**

**`Description`**

Filter results to retrieve only the users associated with or belonging to a specific external Client profile.

**`Example`**

```ts
9107
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 client_id = 71;

#### Defined in

[src/users.scailo_pb.ts:3248](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3248)

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

[src/users.scailo_pb.ts:3122](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3122)

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

[src/users.scailo_pb.ts:3176](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3176)

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

[src/users.scailo_pb.ts:3106](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3106)

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

[src/users.scailo_pb.ts:3138](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3138)

___

### searchKey

• `Optional` **searchKey**: `string`

**`Mandatory`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: optional string search_key = 11;

#### Defined in

[src/users.scailo_pb.ts:3216](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3216)

___

### sortKey

• `Optional` **sortKey**: [`USER_SORT_KEY`](../enums/USER_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.USER_SORT_KEY sort_key = 5;

#### Defined in

[src/users.scailo_pb.ts:3160](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3160)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/users.scailo_pb.ts:3150](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3150)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/users.scailo_pb.ts:3200](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3200)

___

### userType

• `Optional` **userType**: [`USER_TYPE`](../enums/USER_TYPE.md)

**`Optional`**

**`Description`**

The categorical classification of the user entity determining their system scope and behavioral rules.

**`Example`**

```ts
USER_TYPE_EMPLOYEE
```

**`Generated`**

from field: optional Scailo.USER_TYPE user_type = 7;

#### Defined in

[src/users.scailo_pb.ts:3188](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3188)

___

### vendorId

• `Optional` **vendorId**: `bigint`

**`Optional`**

**`Description`**

Filter results to retrieve only the users associated with or belonging to a specific external Vendor profile.

**`Example`**

```ts
5402
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 vendor_id = 70;

#### Defined in

[src/users.scailo_pb.ts:3232](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3232)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users.scailo_pb.ts:3257](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3257)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users.scailo_pb.ts:3255](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3255)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UsersServiceSearchAllReq"``

#### Defined in

[src/users.scailo_pb.ts:3256](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3256)

## Methods

### clone

▸ **clone**(): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md) \| `PlainMessage`\<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md) \| `PlainMessage`\<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md) \| `PlainMessage`\<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users.scailo_pb.ts:3283](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3283)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Defined in

[src/users.scailo_pb.ts:3271](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3271)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Defined in

[src/users.scailo_pb.ts:3275](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3275)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Defined in

[src/users.scailo_pb.ts:3279](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3279)
