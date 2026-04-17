[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServiceSearchAllReq

# Class: ProductionIndentsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.ProductionIndentsServiceSearchAllReq

## Hierarchy

- `Message`\<[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)\>

  ↳ **`ProductionIndentsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServiceSearchAllReq.md#constructor)

### Properties

- [count](ProductionIndentsServiceSearchAllReq.md#count)
- [entityUuid](ProductionIndentsServiceSearchAllReq.md#entityuuid)
- [indentRefFor](ProductionIndentsServiceSearchAllReq.md#indentreffor)
- [indentRefId](ProductionIndentsServiceSearchAllReq.md#indentrefid)
- [isActive](ProductionIndentsServiceSearchAllReq.md#isactive)
- [locationId](ProductionIndentsServiceSearchAllReq.md#locationid)
- [offset](ProductionIndentsServiceSearchAllReq.md#offset)
- [productionRefFor](ProductionIndentsServiceSearchAllReq.md#productionreffor)
- [productionRefId](ProductionIndentsServiceSearchAllReq.md#productionrefid)
- [searchKey](ProductionIndentsServiceSearchAllReq.md#searchkey)
- [sortKey](ProductionIndentsServiceSearchAllReq.md#sortkey)
- [sortOrder](ProductionIndentsServiceSearchAllReq.md#sortorder)
- [status](ProductionIndentsServiceSearchAllReq.md#status)
- [supervisor](ProductionIndentsServiceSearchAllReq.md#supervisor)
- [fields](ProductionIndentsServiceSearchAllReq.md#fields)
- [runtime](ProductionIndentsServiceSearchAllReq.md#runtime)
- [typeName](ProductionIndentsServiceSearchAllReq.md#typename)

### Methods

- [clone](ProductionIndentsServiceSearchAllReq.md#clone)
- [equals](ProductionIndentsServiceSearchAllReq.md#equals)
- [fromBinary](ProductionIndentsServiceSearchAllReq.md#frombinary)
- [fromJson](ProductionIndentsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ProductionIndentsServiceSearchAllReq.md#fromjsonstring)
- [getType](ProductionIndentsServiceSearchAllReq.md#gettype)
- [toBinary](ProductionIndentsServiceSearchAllReq.md#tobinary)
- [toJSON](ProductionIndentsServiceSearchAllReq.md#tojson)
- [toJson](ProductionIndentsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ProductionIndentsServiceSearchAllReq.md#tojsonstring)
- [equals](ProductionIndentsServiceSearchAllReq.md#equals-1)
- [fromBinary](ProductionIndentsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ProductionIndentsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ProductionIndentsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServiceSearchAllReq**(`data?`): [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)\> |

#### Returns

[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Overrides

Message\&lt;ProductionIndentsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/production_indents.scailo_pb.ts:2307](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2307)

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

[src/production_indents.scailo_pb.ts:2181](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2181)

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

[src/production_indents.scailo_pb.ts:2235](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2235)

___

### indentRefFor

• **indentRefFor**: [`PRODUCTION_INDENT_INDENT_REF_FOR`](../enums/PRODUCTION_INDENT_INDENT_REF_FOR.md) = `PRODUCTION_INDENT_INDENT_REF_FOR.PRODUCTION_INDENT_INDENT_REF_FOR_ANY_UNSPECIFIED`

Stores if the indent should be created on the basis of a work order or a family

**`Generated`**

from field: Scailo.PRODUCTION_INDENT_INDENT_REF_FOR indent_ref_for = 28;

#### Defined in

[src/production_indents.scailo_pb.ts:2298](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2298)

___

### indentRefId

• **indentRefId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family or work order

**`Generated`**

from field: uint64 indent_ref_id = 29;

#### Defined in

[src/production_indents.scailo_pb.ts:2305](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2305)

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

[src/production_indents.scailo_pb.ts:2165](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2165)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

[src/production_indents.scailo_pb.ts:2270](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2270)

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

[src/production_indents.scailo_pb.ts:2197](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2197)

___

### productionRefFor

• **productionRefFor**: [`PRODUCTION_INDENT_PRODUCTION_REF_FOR`](../enums/PRODUCTION_INDENT_PRODUCTION_REF_FOR.md) = `PRODUCTION_INDENT_PRODUCTION_REF_FOR.PRODUCTION_INDENT_PRODUCTION_REF_FOR_ANY_UNSPECIFIED`

Stores if the indent is associated to a production plan

**`Generated`**

from field: Scailo.PRODUCTION_INDENT_PRODUCTION_REF_FOR production_ref_for = 26;

#### Defined in

[src/production_indents.scailo_pb.ts:2284](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2284)

___

### productionRefId

• **productionRefId**: `bigint` = `protoInt64.zero`

Stores the production plan ID if production_ref_for is production-plan

**`Generated`**

from field: uint64 production_ref_id = 27;

#### Defined in

[src/production_indents.scailo_pb.ts:2291](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2291)

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

[src/production_indents.scailo_pb.ts:2263](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2263)

___

### sortKey

• **sortKey**: [`PRODUCTION_INDENT_SORT_KEY`](../enums/PRODUCTION_INDENT_SORT_KEY.md) = `PRODUCTION_INDENT_SORT_KEY.PRODUCTION_INDENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PRODUCTION_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/production_indents.scailo_pb.ts:2219](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2219)

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

[src/production_indents.scailo_pb.ts:2209](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2209)

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

[src/production_indents.scailo_pb.ts:2247](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2247)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 25;

#### Defined in

[src/production_indents.scailo_pb.ts:2277](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2277)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents.scailo_pb.ts:2314](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2314)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents.scailo_pb.ts:2312](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2312)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionIndentsServiceSearchAllReq"``

#### Defined in

[src/production_indents.scailo_pb.ts:2313](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2313)

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents.scailo_pb.ts:2343](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2343)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Defined in

[src/production_indents.scailo_pb.ts:2331](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2331)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Defined in

[src/production_indents.scailo_pb.ts:2335](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2335)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Defined in

[src/production_indents.scailo_pb.ts:2339](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_indents.scailo_pb.ts#L2339)
