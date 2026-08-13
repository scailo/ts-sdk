[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsServiceSearchAllReq

# Class: AnnouncementsServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating announcements via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

**`Generated`**

from message Scailo.AnnouncementsServiceSearchAllReq

## Hierarchy

- `Message`\<[`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)\>

  ↳ **`AnnouncementsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](AnnouncementsServiceSearchAllReq.md#constructor)

### Properties

- [count](AnnouncementsServiceSearchAllReq.md#count)
- [entityUuid](AnnouncementsServiceSearchAllReq.md#entityuuid)
- [isActive](AnnouncementsServiceSearchAllReq.md#isactive)
- [offset](AnnouncementsServiceSearchAllReq.md#offset)
- [searchKey](AnnouncementsServiceSearchAllReq.md#searchkey)
- [sortKey](AnnouncementsServiceSearchAllReq.md#sortkey)
- [sortOrder](AnnouncementsServiceSearchAllReq.md#sortorder)
- [status](AnnouncementsServiceSearchAllReq.md#status)
- [fields](AnnouncementsServiceSearchAllReq.md#fields)
- [runtime](AnnouncementsServiceSearchAllReq.md#runtime)
- [typeName](AnnouncementsServiceSearchAllReq.md#typename)

### Methods

- [clone](AnnouncementsServiceSearchAllReq.md#clone)
- [equals](AnnouncementsServiceSearchAllReq.md#equals)
- [fromBinary](AnnouncementsServiceSearchAllReq.md#frombinary)
- [fromJson](AnnouncementsServiceSearchAllReq.md#fromjson)
- [fromJsonString](AnnouncementsServiceSearchAllReq.md#fromjsonstring)
- [getType](AnnouncementsServiceSearchAllReq.md#gettype)
- [toBinary](AnnouncementsServiceSearchAllReq.md#tobinary)
- [toJSON](AnnouncementsServiceSearchAllReq.md#tojson)
- [toJson](AnnouncementsServiceSearchAllReq.md#tojson-1)
- [toJsonString](AnnouncementsServiceSearchAllReq.md#tojsonstring)
- [equals](AnnouncementsServiceSearchAllReq.md#equals-1)
- [fromBinary](AnnouncementsServiceSearchAllReq.md#frombinary-1)
- [fromJson](AnnouncementsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](AnnouncementsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnnouncementsServiceSearchAllReq**(`data?`): [`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)\> |

#### Returns

[`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)

#### Overrides

Message\&lt;AnnouncementsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/announcements.scailo_pb.ts:1712](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1712)

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

[src/announcements.scailo_pb.ts:1628](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1628)

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

[src/announcements.scailo_pb.ts:1682](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1682)

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

[src/announcements.scailo_pb.ts:1612](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1612)

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

[src/announcements.scailo_pb.ts:1644](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1644)

___

### searchKey

• `Optional` **searchKey**: `string`

**`Optional`**

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

[src/announcements.scailo_pb.ts:1710](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1710)

___

### sortKey

• `Optional` **sortKey**: [`ANNOUNCEMENT_SORT_KEY`](../enums/ANNOUNCEMENT_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.ANNOUNCEMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/announcements.scailo_pb.ts:1666](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1666)

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

[src/announcements.scailo_pb.ts:1656](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1656)

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

[src/announcements.scailo_pb.ts:1694](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1694)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements.scailo_pb.ts:1719](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1719)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements.scailo_pb.ts:1717](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1717)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AnnouncementsServiceSearchAllReq"``

#### Defined in

[src/announcements.scailo_pb.ts:1718](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1718)

## Methods

### clone

▸ **clone**(): [`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md) \| `PlainMessage`\<[`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md) \| `PlainMessage`\<[`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md) \| `PlainMessage`\<[`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements.scailo_pb.ts:1742](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1742)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:1730](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1730)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:1734](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1734)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceSearchAllReq`](AnnouncementsServiceSearchAllReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:1738](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L1738)
