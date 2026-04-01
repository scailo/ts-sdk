[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsServiceSearchAllReq

# Class: AssetIndentsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.AssetIndentsServiceSearchAllReq

## Hierarchy

- `Message`\<[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)\>

  ↳ **`AssetIndentsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](AssetIndentsServiceSearchAllReq.md#constructor)

### Properties

- [count](AssetIndentsServiceSearchAllReq.md#count)
- [entityUuid](AssetIndentsServiceSearchAllReq.md#entityuuid)
- [isActive](AssetIndentsServiceSearchAllReq.md#isactive)
- [locationId](AssetIndentsServiceSearchAllReq.md#locationid)
- [offset](AssetIndentsServiceSearchAllReq.md#offset)
- [searchKey](AssetIndentsServiceSearchAllReq.md#searchkey)
- [sortKey](AssetIndentsServiceSearchAllReq.md#sortkey)
- [sortOrder](AssetIndentsServiceSearchAllReq.md#sortorder)
- [status](AssetIndentsServiceSearchAllReq.md#status)
- [userId](AssetIndentsServiceSearchAllReq.md#userid)
- [fields](AssetIndentsServiceSearchAllReq.md#fields)
- [runtime](AssetIndentsServiceSearchAllReq.md#runtime)
- [typeName](AssetIndentsServiceSearchAllReq.md#typename)

### Methods

- [clone](AssetIndentsServiceSearchAllReq.md#clone)
- [equals](AssetIndentsServiceSearchAllReq.md#equals)
- [fromBinary](AssetIndentsServiceSearchAllReq.md#frombinary)
- [fromJson](AssetIndentsServiceSearchAllReq.md#fromjson)
- [fromJsonString](AssetIndentsServiceSearchAllReq.md#fromjsonstring)
- [getType](AssetIndentsServiceSearchAllReq.md#gettype)
- [toBinary](AssetIndentsServiceSearchAllReq.md#tobinary)
- [toJSON](AssetIndentsServiceSearchAllReq.md#tojson)
- [toJson](AssetIndentsServiceSearchAllReq.md#tojson-1)
- [toJsonString](AssetIndentsServiceSearchAllReq.md#tojsonstring)
- [equals](AssetIndentsServiceSearchAllReq.md#equals-1)
- [fromBinary](AssetIndentsServiceSearchAllReq.md#frombinary-1)
- [fromJson](AssetIndentsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](AssetIndentsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsServiceSearchAllReq**(`data?`): [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)\> |

#### Returns

[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Overrides

Message\&lt;AssetIndentsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/asset_indents.scailo_pb.ts:2317](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2317)

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

[src/asset_indents.scailo_pb.ts:2219](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2219)

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

[src/asset_indents.scailo_pb.ts:2273](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2273)

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

[src/asset_indents.scailo_pb.ts:2203](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2203)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

[src/asset_indents.scailo_pb.ts:2308](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2308)

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

[src/asset_indents.scailo_pb.ts:2235](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2235)

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

[src/asset_indents.scailo_pb.ts:2301](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2301)

___

### sortKey

• **sortKey**: [`ASSET_INDENT_SORT_KEY`](../enums/ASSET_INDENT_SORT_KEY.md) = `ASSET_INDENT_SORT_KEY.ASSET_INDENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.ASSET_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/asset_indents.scailo_pb.ts:2257](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2257)

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

[src/asset_indents.scailo_pb.ts:2247](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2247)

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

[src/asset_indents.scailo_pb.ts:2285](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2285)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the associated user

**`Generated`**

from field: uint64 user_id = 25;

#### Defined in

[src/asset_indents.scailo_pb.ts:2315](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2315)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents.scailo_pb.ts:2324](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2324)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents.scailo_pb.ts:2322](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2322)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentsServiceSearchAllReq"``

#### Defined in

[src/asset_indents.scailo_pb.ts:2323](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2323)

## Methods

### clone

▸ **clone**(): [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents.scailo_pb.ts:2349](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2349)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:2337](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2337)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:2341](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2341)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceSearchAllReq`](AssetIndentsServiceSearchAllReq.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:2345](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L2345)
