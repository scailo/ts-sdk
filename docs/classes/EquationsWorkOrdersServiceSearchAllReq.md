[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServiceSearchAllReq

# Class: EquationsWorkOrdersServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.EquationsWorkOrdersServiceSearchAllReq

## Hierarchy

- `Message`\<[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)\>

  ↳ **`EquationsWorkOrdersServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServiceSearchAllReq.md#constructor)

### Properties

- [count](EquationsWorkOrdersServiceSearchAllReq.md#count)
- [entityUuid](EquationsWorkOrdersServiceSearchAllReq.md#entityuuid)
- [isActive](EquationsWorkOrdersServiceSearchAllReq.md#isactive)
- [offset](EquationsWorkOrdersServiceSearchAllReq.md#offset)
- [searchKey](EquationsWorkOrdersServiceSearchAllReq.md#searchkey)
- [sortKey](EquationsWorkOrdersServiceSearchAllReq.md#sortkey)
- [sortOrder](EquationsWorkOrdersServiceSearchAllReq.md#sortorder)
- [status](EquationsWorkOrdersServiceSearchAllReq.md#status)
- [fields](EquationsWorkOrdersServiceSearchAllReq.md#fields)
- [runtime](EquationsWorkOrdersServiceSearchAllReq.md#runtime)
- [typeName](EquationsWorkOrdersServiceSearchAllReq.md#typename)

### Methods

- [clone](EquationsWorkOrdersServiceSearchAllReq.md#clone)
- [equals](EquationsWorkOrdersServiceSearchAllReq.md#equals)
- [fromBinary](EquationsWorkOrdersServiceSearchAllReq.md#frombinary)
- [fromJson](EquationsWorkOrdersServiceSearchAllReq.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServiceSearchAllReq.md#fromjsonstring)
- [getType](EquationsWorkOrdersServiceSearchAllReq.md#gettype)
- [toBinary](EquationsWorkOrdersServiceSearchAllReq.md#tobinary)
- [toJSON](EquationsWorkOrdersServiceSearchAllReq.md#tojson)
- [toJson](EquationsWorkOrdersServiceSearchAllReq.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServiceSearchAllReq.md#tojsonstring)
- [equals](EquationsWorkOrdersServiceSearchAllReq.md#equals-1)
- [fromBinary](EquationsWorkOrdersServiceSearchAllReq.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServiceSearchAllReq**(`data?`): [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)\> |

#### Returns

[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Overrides

Message\&lt;EquationsWorkOrdersServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/equations_work_orders.scailo_pb.ts:2196](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2196)

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

[src/equations_work_orders.scailo_pb.ts:2112](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2112)

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

[src/equations_work_orders.scailo_pb.ts:2166](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2166)

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

[src/equations_work_orders.scailo_pb.ts:2096](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2096)

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

[src/equations_work_orders.scailo_pb.ts:2128](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2128)

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

[src/equations_work_orders.scailo_pb.ts:2194](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2194)

___

### sortKey

• **sortKey**: [`EQUATION_WORK_ORDER_SORT_KEY`](../enums/EQUATION_WORK_ORDER_SORT_KEY.md) = `EQUATION_WORK_ORDER_SORT_KEY.EQUATION_WORK_ORDER_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.EQUATION_WORK_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:2150](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2150)

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

[src/equations_work_orders.scailo_pb.ts:2140](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2140)

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

[src/equations_work_orders.scailo_pb.ts:2178](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2178)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:2203](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2203)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:2201](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2201)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsWorkOrdersServiceSearchAllReq"``

#### Defined in

[src/equations_work_orders.scailo_pb.ts:2202](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2202)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:2226](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2226)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:2214](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2214)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:2218](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2218)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:2222](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_work_orders.scailo_pb.ts#L2222)
