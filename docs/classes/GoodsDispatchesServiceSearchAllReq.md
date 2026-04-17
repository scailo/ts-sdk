[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceSearchAllReq

# Class: GoodsDispatchesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.GoodsDispatchesServiceSearchAllReq

## Hierarchy

- `Message`\<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\>

  ↳ **`GoodsDispatchesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceSearchAllReq.md#constructor)

### Properties

- [billingStatus](GoodsDispatchesServiceSearchAllReq.md#billingstatus)
- [buyerClientId](GoodsDispatchesServiceSearchAllReq.md#buyerclientid)
- [consigneeClientId](GoodsDispatchesServiceSearchAllReq.md#consigneeclientid)
- [count](GoodsDispatchesServiceSearchAllReq.md#count)
- [entityUuid](GoodsDispatchesServiceSearchAllReq.md#entityuuid)
- [isActive](GoodsDispatchesServiceSearchAllReq.md#isactive)
- [offset](GoodsDispatchesServiceSearchAllReq.md#offset)
- [refFrom](GoodsDispatchesServiceSearchAllReq.md#reffrom)
- [refId](GoodsDispatchesServiceSearchAllReq.md#refid)
- [searchKey](GoodsDispatchesServiceSearchAllReq.md#searchkey)
- [sortKey](GoodsDispatchesServiceSearchAllReq.md#sortkey)
- [sortOrder](GoodsDispatchesServiceSearchAllReq.md#sortorder)
- [status](GoodsDispatchesServiceSearchAllReq.md#status)
- [fields](GoodsDispatchesServiceSearchAllReq.md#fields)
- [runtime](GoodsDispatchesServiceSearchAllReq.md#runtime)
- [typeName](GoodsDispatchesServiceSearchAllReq.md#typename)

### Methods

- [clone](GoodsDispatchesServiceSearchAllReq.md#clone)
- [equals](GoodsDispatchesServiceSearchAllReq.md#equals)
- [fromBinary](GoodsDispatchesServiceSearchAllReq.md#frombinary)
- [fromJson](GoodsDispatchesServiceSearchAllReq.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceSearchAllReq.md#fromjsonstring)
- [getType](GoodsDispatchesServiceSearchAllReq.md#gettype)
- [toBinary](GoodsDispatchesServiceSearchAllReq.md#tobinary)
- [toJSON](GoodsDispatchesServiceSearchAllReq.md#tojson)
- [toJson](GoodsDispatchesServiceSearchAllReq.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceSearchAllReq.md#tojsonstring)
- [equals](GoodsDispatchesServiceSearchAllReq.md#equals-1)
- [fromBinary](GoodsDispatchesServiceSearchAllReq.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceSearchAllReq**(`data?`): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\> |

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Overrides

Message\&lt;GoodsDispatchesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2893](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2893)

## Properties

### billingStatus

• **billingStatus**: [`GOODS_DISPATCH_BILLING_STATUS`](../enums/GOODS_DISPATCH_BILLING_STATUS.md) = `GOODS_DISPATCH_BILLING_STATUS.GOODS_DISPATCH_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the goods dispatch bill

**`Generated`**

from field: Scailo.GOODS_DISPATCH_BILLING_STATUS billing_status = 40;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2876](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2876)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2891](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2891)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2884](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2884)

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

[src/goods_dispatches.scailo_pb.ts:2773](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2773)

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

[src/goods_dispatches.scailo_pb.ts:2827](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2827)

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

[src/goods_dispatches.scailo_pb.ts:2757](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2757)

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

[src/goods_dispatches.scailo_pb.ts:2789](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2789)

___

### refFrom

• **refFrom**: [`GOODS_DISPATCH_REF_FROM`](../enums/GOODS_DISPATCH_REF_FROM.md) = `GOODS_DISPATCH_REF_FROM.GOODS_DISPATCH_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.GOODS_DISPATCH_REF_FROM ref_from = 22;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2862](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2862)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2869](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2869)

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

[src/goods_dispatches.scailo_pb.ts:2855](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2855)

___

### sortKey

• **sortKey**: [`GOODS_DISPATCH_SORT_KEY`](../enums/GOODS_DISPATCH_SORT_KEY.md) = `GOODS_DISPATCH_SORT_KEY.GOODS_DISPATCH_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.GOODS_DISPATCH_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2811](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2811)

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

[src/goods_dispatches.scailo_pb.ts:2801](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2801)

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

[src/goods_dispatches.scailo_pb.ts:2839](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2839)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2900](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2900)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2898](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2898)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceSearchAllReq"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2899](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2899)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md) \| `PlainMessage`\<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md) \| `PlainMessage`\<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md) \| `PlainMessage`\<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2928](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2928)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2916](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2916)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2920](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2920)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2924](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2924)
