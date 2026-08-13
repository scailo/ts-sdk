[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentItemsSearchRequest

# Class: ReplaceableIndentItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.ReplaceableIndentItemsSearchRequest

## Hierarchy

- `Message`\<[`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)\>

  ↳ **`ReplaceableIndentItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](ReplaceableIndentItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](ReplaceableIndentItemsSearchRequest.md#approvedonend)
- [approvedOnStart](ReplaceableIndentItemsSearchRequest.md#approvedonstart)
- [approverRoleId](ReplaceableIndentItemsSearchRequest.md#approverroleid)
- [count](ReplaceableIndentItemsSearchRequest.md#count)
- [entityUuid](ReplaceableIndentItemsSearchRequest.md#entityuuid)
- [familyId](ReplaceableIndentItemsSearchRequest.md#familyid)
- [isActive](ReplaceableIndentItemsSearchRequest.md#isactive)
- [offset](ReplaceableIndentItemsSearchRequest.md#offset)
- [replaceableIndentId](ReplaceableIndentItemsSearchRequest.md#replaceableindentid)
- [searchKey](ReplaceableIndentItemsSearchRequest.md#searchkey)
- [sortKey](ReplaceableIndentItemsSearchRequest.md#sortkey)
- [sortOrder](ReplaceableIndentItemsSearchRequest.md#sortorder)
- [status](ReplaceableIndentItemsSearchRequest.md#status)
- [fields](ReplaceableIndentItemsSearchRequest.md#fields)
- [runtime](ReplaceableIndentItemsSearchRequest.md#runtime)
- [typeName](ReplaceableIndentItemsSearchRequest.md#typename)

### Methods

- [clone](ReplaceableIndentItemsSearchRequest.md#clone)
- [equals](ReplaceableIndentItemsSearchRequest.md#equals)
- [fromBinary](ReplaceableIndentItemsSearchRequest.md#frombinary)
- [fromJson](ReplaceableIndentItemsSearchRequest.md#fromjson)
- [fromJsonString](ReplaceableIndentItemsSearchRequest.md#fromjsonstring)
- [getType](ReplaceableIndentItemsSearchRequest.md#gettype)
- [toBinary](ReplaceableIndentItemsSearchRequest.md#tobinary)
- [toJSON](ReplaceableIndentItemsSearchRequest.md#tojson)
- [toJson](ReplaceableIndentItemsSearchRequest.md#tojson-1)
- [toJsonString](ReplaceableIndentItemsSearchRequest.md#tojsonstring)
- [equals](ReplaceableIndentItemsSearchRequest.md#equals-1)
- [fromBinary](ReplaceableIndentItemsSearchRequest.md#frombinary-1)
- [fromJson](ReplaceableIndentItemsSearchRequest.md#fromjson-1)
- [fromJsonString](ReplaceableIndentItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentItemsSearchRequest**(`data?`): [`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)\> |

#### Returns

[`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)

#### Overrides

Message\&lt;ReplaceableIndentItemsSearchRequest\&gt;.constructor

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2452](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2452)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2422](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2422)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2415](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2415)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2408](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2408)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2429](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2429)

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

[src/replaceable_indents.scailo_pb.ts:2340](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2340)

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

[src/replaceable_indents.scailo_pb.ts:2394](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2394)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2443](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2443)

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

[src/replaceable_indents.scailo_pb.ts:2324](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2324)

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

[src/replaceable_indents.scailo_pb.ts:2356](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2356)

___

### replaceableIndentId

• **replaceableIndentId**: `bigint` = `protoInt64.zero`

The ID of the replaceable indent

**`Generated`**

from field: uint64 replaceable_indent_id = 20;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2436](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2436)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2450](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2450)

___

### sortKey

• **sortKey**: [`REPLACEABLE_INDENT_ITEM_SORT_KEY`](../enums/REPLACEABLE_INDENT_ITEM_SORT_KEY.md) = `REPLACEABLE_INDENT_ITEM_SORT_KEY.REPLACEABLE_INDENT_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.REPLACEABLE_INDENT_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2378](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2378)

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

[src/replaceable_indents.scailo_pb.ts:2368](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2368)

___

### status

• **status**: [`REPLACEABLE_INDENT_ITEM_STATUS`](../enums/REPLACEABLE_INDENT_ITEM_STATUS.md) = `REPLACEABLE_INDENT_ITEM_STATUS.REPLACEABLE_INDENT_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.REPLACEABLE_INDENT_ITEM_STATUS status = 7;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2401](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2401)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2459](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2459)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2457](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2457)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentItemsSearchRequest"``

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2458](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2458)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md) \| `PlainMessage`\<[`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md) \| `PlainMessage`\<[`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md) \| `PlainMessage`\<[`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2488](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2488)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2476](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2476)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2480](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2480)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentItemsSearchRequest`](ReplaceableIndentItemsSearchRequest.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2484](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L2484)
