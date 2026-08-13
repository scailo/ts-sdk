[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesTagsServiceSearchAllReq

# Class: ActivitiesTagsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.ActivitiesTagsServiceSearchAllReq

## Hierarchy

- `Message`\<[`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)\>

  ↳ **`ActivitiesTagsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesTagsServiceSearchAllReq.md#constructor)

### Properties

- [count](ActivitiesTagsServiceSearchAllReq.md#count)
- [entityUuid](ActivitiesTagsServiceSearchAllReq.md#entityuuid)
- [isActive](ActivitiesTagsServiceSearchAllReq.md#isactive)
- [isLeaf](ActivitiesTagsServiceSearchAllReq.md#isleaf)
- [offset](ActivitiesTagsServiceSearchAllReq.md#offset)
- [parentActivityTagId](ActivitiesTagsServiceSearchAllReq.md#parentactivitytagid)
- [searchKey](ActivitiesTagsServiceSearchAllReq.md#searchkey)
- [sortKey](ActivitiesTagsServiceSearchAllReq.md#sortkey)
- [sortOrder](ActivitiesTagsServiceSearchAllReq.md#sortorder)
- [status](ActivitiesTagsServiceSearchAllReq.md#status)
- [fields](ActivitiesTagsServiceSearchAllReq.md#fields)
- [runtime](ActivitiesTagsServiceSearchAllReq.md#runtime)
- [typeName](ActivitiesTagsServiceSearchAllReq.md#typename)

### Methods

- [clone](ActivitiesTagsServiceSearchAllReq.md#clone)
- [equals](ActivitiesTagsServiceSearchAllReq.md#equals)
- [fromBinary](ActivitiesTagsServiceSearchAllReq.md#frombinary)
- [fromJson](ActivitiesTagsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ActivitiesTagsServiceSearchAllReq.md#fromjsonstring)
- [getType](ActivitiesTagsServiceSearchAllReq.md#gettype)
- [toBinary](ActivitiesTagsServiceSearchAllReq.md#tobinary)
- [toJSON](ActivitiesTagsServiceSearchAllReq.md#tojson)
- [toJson](ActivitiesTagsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ActivitiesTagsServiceSearchAllReq.md#tojsonstring)
- [equals](ActivitiesTagsServiceSearchAllReq.md#equals-1)
- [fromBinary](ActivitiesTagsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ActivitiesTagsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ActivitiesTagsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesTagsServiceSearchAllReq**(`data?`): [`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)\> |

#### Returns

[`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)

#### Overrides

Message\&lt;ActivitiesTagsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/activities_tags.scailo_pb.ts:1374](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1374)

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

[src/activities_tags.scailo_pb.ts:1276](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1276)

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

[src/activities_tags.scailo_pb.ts:1330](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1330)

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

[src/activities_tags.scailo_pb.ts:1260](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1260)

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Filter with the given leaf property

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 26;

#### Defined in

[src/activities_tags.scailo_pb.ts:1372](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1372)

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

[src/activities_tags.scailo_pb.ts:1292](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1292)

___

### parentActivityTagId

• **parentActivityTagId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent activity tag (0, if the first activity tag that is being created is a leaf activity tag)

**`Generated`**

from field: uint64 parent_activity_tag_id = 25;

#### Defined in

[src/activities_tags.scailo_pb.ts:1365](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1365)

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

[src/activities_tags.scailo_pb.ts:1358](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1358)

___

### sortKey

• **sortKey**: [`ACTIVITY_TAG_SORT_KEY`](../enums/ACTIVITY_TAG_SORT_KEY.md) = `ACTIVITY_TAG_SORT_KEY.ACTIVITY_TAG_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.ACTIVITY_TAG_SORT_KEY sort_key = 5;

#### Defined in

[src/activities_tags.scailo_pb.ts:1314](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1314)

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

[src/activities_tags.scailo_pb.ts:1304](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1304)

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

[src/activities_tags.scailo_pb.ts:1342](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1342)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities_tags.scailo_pb.ts:1381](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1381)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities_tags.scailo_pb.ts:1379](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1379)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesTagsServiceSearchAllReq"``

#### Defined in

[src/activities_tags.scailo_pb.ts:1380](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1380)

## Methods

### clone

▸ **clone**(): [`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md) \| `PlainMessage`\<[`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md) \| `PlainMessage`\<[`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md) \| `PlainMessage`\<[`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities_tags.scailo_pb.ts:1406](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1406)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:1394](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1394)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:1398](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1398)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceSearchAllReq`](ActivitiesTagsServiceSearchAllReq.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:1402](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/activities_tags.scailo_pb.ts#L1402)
