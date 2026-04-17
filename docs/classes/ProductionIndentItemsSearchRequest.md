[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentItemsSearchRequest

# Class: ProductionIndentItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.ProductionIndentItemsSearchRequest

## Hierarchy

- `Message`\<[`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)\>

  ↳ **`ProductionIndentItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](ProductionIndentItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](ProductionIndentItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](ProductionIndentItemsSearchRequest.md#approvedonend)
- [approvedOnStart](ProductionIndentItemsSearchRequest.md#approvedonstart)
- [approverRoleId](ProductionIndentItemsSearchRequest.md#approverroleid)
- [count](ProductionIndentItemsSearchRequest.md#count)
- [entityUuid](ProductionIndentItemsSearchRequest.md#entityuuid)
- [familyId](ProductionIndentItemsSearchRequest.md#familyid)
- [isActive](ProductionIndentItemsSearchRequest.md#isactive)
- [offset](ProductionIndentItemsSearchRequest.md#offset)
- [productionIndentId](ProductionIndentItemsSearchRequest.md#productionindentid)
- [searchKey](ProductionIndentItemsSearchRequest.md#searchkey)
- [sortKey](ProductionIndentItemsSearchRequest.md#sortkey)
- [sortOrder](ProductionIndentItemsSearchRequest.md#sortorder)
- [status](ProductionIndentItemsSearchRequest.md#status)
- [fields](ProductionIndentItemsSearchRequest.md#fields)
- [runtime](ProductionIndentItemsSearchRequest.md#runtime)
- [typeName](ProductionIndentItemsSearchRequest.md#typename)

### Methods

- [clone](ProductionIndentItemsSearchRequest.md#clone)
- [equals](ProductionIndentItemsSearchRequest.md#equals)
- [fromBinary](ProductionIndentItemsSearchRequest.md#frombinary)
- [fromJson](ProductionIndentItemsSearchRequest.md#fromjson)
- [fromJsonString](ProductionIndentItemsSearchRequest.md#fromjsonstring)
- [getType](ProductionIndentItemsSearchRequest.md#gettype)
- [toBinary](ProductionIndentItemsSearchRequest.md#tobinary)
- [toJSON](ProductionIndentItemsSearchRequest.md#tojson)
- [toJson](ProductionIndentItemsSearchRequest.md#tojson-1)
- [toJsonString](ProductionIndentItemsSearchRequest.md#tojsonstring)
- [equals](ProductionIndentItemsSearchRequest.md#equals-1)
- [fromBinary](ProductionIndentItemsSearchRequest.md#frombinary-1)
- [fromJson](ProductionIndentItemsSearchRequest.md#fromjson-1)
- [fromJsonString](ProductionIndentItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentItemsSearchRequest**(`data?`): [`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)\> |

#### Returns

[`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)

#### Overrides

Message\&lt;ProductionIndentItemsSearchRequest\&gt;.constructor

#### Defined in

[src/production_indents.scailo_pb.ts:2493](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2493)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/production_indents.scailo_pb.ts:2463](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2463)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/production_indents.scailo_pb.ts:2456](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2456)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/production_indents.scailo_pb.ts:2449](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2449)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/production_indents.scailo_pb.ts:2470](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2470)

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

[src/production_indents.scailo_pb.ts:2381](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2381)

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

[src/production_indents.scailo_pb.ts:2435](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2435)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

[src/production_indents.scailo_pb.ts:2484](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2484)

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

[src/production_indents.scailo_pb.ts:2365](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2365)

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

[src/production_indents.scailo_pb.ts:2397](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2397)

___

### productionIndentId

• **productionIndentId**: `bigint` = `protoInt64.zero`

The ID of the production indent

**`Generated`**

from field: uint64 production_indent_id = 20;

#### Defined in

[src/production_indents.scailo_pb.ts:2477](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2477)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/production_indents.scailo_pb.ts:2491](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2491)

___

### sortKey

• **sortKey**: [`PRODUCTION_INDENT_ITEM_SORT_KEY`](../enums/PRODUCTION_INDENT_ITEM_SORT_KEY.md) = `PRODUCTION_INDENT_ITEM_SORT_KEY.PRODUCTION_INDENT_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PRODUCTION_INDENT_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/production_indents.scailo_pb.ts:2419](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2419)

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

[src/production_indents.scailo_pb.ts:2409](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2409)

___

### status

• **status**: [`PRODUCTION_INDENT_ITEM_STATUS`](../enums/PRODUCTION_INDENT_ITEM_STATUS.md) = `PRODUCTION_INDENT_ITEM_STATUS.PRODUCTION_INDENT_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.PRODUCTION_INDENT_ITEM_STATUS status = 7;

#### Defined in

[src/production_indents.scailo_pb.ts:2442](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2442)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents.scailo_pb.ts:2500](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2500)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents.scailo_pb.ts:2498](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2498)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionIndentItemsSearchRequest"``

#### Defined in

[src/production_indents.scailo_pb.ts:2499](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2499)

## Methods

### clone

▸ **clone**(): [`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md) \| `PlainMessage`\<[`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md) \| `PlainMessage`\<[`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md) \| `PlainMessage`\<[`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents.scailo_pb.ts:2529](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2529)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)

#### Defined in

[src/production_indents.scailo_pb.ts:2517](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2517)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)

#### Defined in

[src/production_indents.scailo_pb.ts:2521](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2521)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentItemsSearchRequest`](ProductionIndentItemsSearchRequest.md)

#### Defined in

[src/production_indents.scailo_pb.ts:2525](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2525)
