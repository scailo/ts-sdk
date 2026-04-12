[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VisitationsServiceSearchAllReq

# Class: VisitationsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.VisitationsServiceSearchAllReq

## Hierarchy

- `Message`\<[`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)\>

  ↳ **`VisitationsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](VisitationsServiceSearchAllReq.md#constructor)

### Properties

- [count](VisitationsServiceSearchAllReq.md#count)
- [entityUuid](VisitationsServiceSearchAllReq.md#entityuuid)
- [isActive](VisitationsServiceSearchAllReq.md#isactive)
- [offset](VisitationsServiceSearchAllReq.md#offset)
- [searchKey](VisitationsServiceSearchAllReq.md#searchkey)
- [sortKey](VisitationsServiceSearchAllReq.md#sortkey)
- [sortOrder](VisitationsServiceSearchAllReq.md#sortorder)
- [status](VisitationsServiceSearchAllReq.md#status)
- [userId](VisitationsServiceSearchAllReq.md#userid)
- [fields](VisitationsServiceSearchAllReq.md#fields)
- [runtime](VisitationsServiceSearchAllReq.md#runtime)
- [typeName](VisitationsServiceSearchAllReq.md#typename)

### Methods

- [clone](VisitationsServiceSearchAllReq.md#clone)
- [equals](VisitationsServiceSearchAllReq.md#equals)
- [fromBinary](VisitationsServiceSearchAllReq.md#frombinary)
- [fromJson](VisitationsServiceSearchAllReq.md#fromjson)
- [fromJsonString](VisitationsServiceSearchAllReq.md#fromjsonstring)
- [getType](VisitationsServiceSearchAllReq.md#gettype)
- [toBinary](VisitationsServiceSearchAllReq.md#tobinary)
- [toJSON](VisitationsServiceSearchAllReq.md#tojson)
- [toJson](VisitationsServiceSearchAllReq.md#tojson-1)
- [toJsonString](VisitationsServiceSearchAllReq.md#tojsonstring)
- [equals](VisitationsServiceSearchAllReq.md#equals-1)
- [fromBinary](VisitationsServiceSearchAllReq.md#frombinary-1)
- [fromJson](VisitationsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](VisitationsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VisitationsServiceSearchAllReq**(`data?`): [`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)\> |

#### Returns

[`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)

#### Overrides

Message\&lt;VisitationsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/visitations.scailo_pb.ts:1835](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1835)

## Properties

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

[src/visitations.scailo_pb.ts:1744](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1744)

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

[src/visitations.scailo_pb.ts:1798](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1798)

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

[src/visitations.scailo_pb.ts:1728](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1728)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

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

from field: uint64 offset = 3;

#### Defined in

[src/visitations.scailo_pb.ts:1760](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1760)

___

### searchKey

• **searchKey**: `string` = `""`

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

from field: string search_key = 11;

#### Defined in

[src/visitations.scailo_pb.ts:1826](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1826)

___

### sortKey

• **sortKey**: [`VISITATION_SORT_KEY`](../enums/VISITATION_SORT_KEY.md) = `VISITATION_SORT_KEY.VISITATION_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.VISITATION_SORT_KEY sort_key = 5;

#### Defined in

[src/visitations.scailo_pb.ts:1782](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1782)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/visitations.scailo_pb.ts:1772](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1772)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/visitations.scailo_pb.ts:1810](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1810)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who is being visited

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/visitations.scailo_pb.ts:1833](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1833)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/visitations.scailo_pb.ts:1842](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1842)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/visitations.scailo_pb.ts:1840](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1840)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VisitationsServiceSearchAllReq"``

#### Defined in

[src/visitations.scailo_pb.ts:1841](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1841)

## Methods

### clone

▸ **clone**(): [`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md) \| `PlainMessage`\<[`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md) \| `PlainMessage`\<[`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md) \| `PlainMessage`\<[`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/visitations.scailo_pb.ts:1866](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1866)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:1854](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1854)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:1858](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1858)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceSearchAllReq`](VisitationsServiceSearchAllReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:1862](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/visitations.scailo_pb.ts#L1862)
