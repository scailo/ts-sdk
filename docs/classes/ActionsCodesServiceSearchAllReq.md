[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActionsCodesServiceSearchAllReq

# Class: ActionsCodesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.ActionsCodesServiceSearchAllReq

## Hierarchy

- `Message`\<[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)\>

  ↳ **`ActionsCodesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ActionsCodesServiceSearchAllReq.md#constructor)

### Properties

- [count](ActionsCodesServiceSearchAllReq.md#count)
- [entityUuid](ActionsCodesServiceSearchAllReq.md#entityuuid)
- [isActive](ActionsCodesServiceSearchAllReq.md#isactive)
- [isLeaf](ActionsCodesServiceSearchAllReq.md#isleaf)
- [offset](ActionsCodesServiceSearchAllReq.md#offset)
- [parentActionCodeId](ActionsCodesServiceSearchAllReq.md#parentactioncodeid)
- [searchKey](ActionsCodesServiceSearchAllReq.md#searchkey)
- [sortKey](ActionsCodesServiceSearchAllReq.md#sortkey)
- [sortOrder](ActionsCodesServiceSearchAllReq.md#sortorder)
- [status](ActionsCodesServiceSearchAllReq.md#status)
- [fields](ActionsCodesServiceSearchAllReq.md#fields)
- [runtime](ActionsCodesServiceSearchAllReq.md#runtime)
- [typeName](ActionsCodesServiceSearchAllReq.md#typename)

### Methods

- [clone](ActionsCodesServiceSearchAllReq.md#clone)
- [equals](ActionsCodesServiceSearchAllReq.md#equals)
- [fromBinary](ActionsCodesServiceSearchAllReq.md#frombinary)
- [fromJson](ActionsCodesServiceSearchAllReq.md#fromjson)
- [fromJsonString](ActionsCodesServiceSearchAllReq.md#fromjsonstring)
- [getType](ActionsCodesServiceSearchAllReq.md#gettype)
- [toBinary](ActionsCodesServiceSearchAllReq.md#tobinary)
- [toJSON](ActionsCodesServiceSearchAllReq.md#tojson)
- [toJson](ActionsCodesServiceSearchAllReq.md#tojson-1)
- [toJsonString](ActionsCodesServiceSearchAllReq.md#tojsonstring)
- [equals](ActionsCodesServiceSearchAllReq.md#equals-1)
- [fromBinary](ActionsCodesServiceSearchAllReq.md#frombinary-1)
- [fromJson](ActionsCodesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ActionsCodesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActionsCodesServiceSearchAllReq**(`data?`): [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)\> |

#### Returns

[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Overrides

Message\&lt;ActionsCodesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/actions_codes.scailo_pb.ts:1647](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1647)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
50
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/actions_codes.scailo_pb.ts:1535](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1535)

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

[src/actions_codes.scailo_pb.ts:1589](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1589)

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

[src/actions_codes.scailo_pb.ts:1519](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1519)

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by the given leaf property (TRUE, FALSE, ANY)

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 26;

#### Defined in

[src/actions_codes.scailo_pb.ts:1645](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1645)

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

[src/actions_codes.scailo_pb.ts:1551](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1551)

___

### parentActionCodeId

• **parentActionCodeId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by specific ID of the parent action code. If this is set, then all the action codes that are associated to this parent action code are retrieved.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 parent_action_code_id = 25;

#### Defined in

[src/actions_codes.scailo_pb.ts:1633](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1633)

___

### searchKey

• **searchKey**: `string` = `""`

**`Mandatory`**

**`Description`**

The search string to match against.

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

[src/actions_codes.scailo_pb.ts:1617](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1617)

___

### sortKey

• **sortKey**: [`ACTION_CODE_SORT_KEY`](../enums/ACTION_CODE_SORT_KEY.md) = `ACTION_CODE_SORT_KEY.ACTION_CODE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.ACTION_CODE_SORT_KEY sort_key = 5;

#### Defined in

[src/actions_codes.scailo_pb.ts:1573](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1573)

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

[src/actions_codes.scailo_pb.ts:1563](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1563)

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

[src/actions_codes.scailo_pb.ts:1601](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1601)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/actions_codes.scailo_pb.ts:1654](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1654)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/actions_codes.scailo_pb.ts:1652](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1652)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActionsCodesServiceSearchAllReq"``

#### Defined in

[src/actions_codes.scailo_pb.ts:1653](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1653)

## Methods

### clone

▸ **clone**(): [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md) \| `PlainMessage`\<[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md) \| `PlainMessage`\<[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md) \| `PlainMessage`\<[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/actions_codes.scailo_pb.ts:1679](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1679)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:1667](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1667)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:1671](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1671)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionsCodesServiceSearchAllReq`](ActionsCodesServiceSearchAllReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:1675](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L1675)
