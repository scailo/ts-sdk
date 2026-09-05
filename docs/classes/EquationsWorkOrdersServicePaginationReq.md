[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServicePaginationReq

# Class: EquationsWorkOrdersServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.EquationsWorkOrdersServicePaginationReq

## Hierarchy

- `Message`\<[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)\>

  ↳ **`EquationsWorkOrdersServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServicePaginationReq.md#constructor)

### Properties

- [count](EquationsWorkOrdersServicePaginationReq.md#count)
- [isActive](EquationsWorkOrdersServicePaginationReq.md#isactive)
- [offset](EquationsWorkOrdersServicePaginationReq.md#offset)
- [sortKey](EquationsWorkOrdersServicePaginationReq.md#sortkey)
- [sortOrder](EquationsWorkOrdersServicePaginationReq.md#sortorder)
- [status](EquationsWorkOrdersServicePaginationReq.md#status)
- [fields](EquationsWorkOrdersServicePaginationReq.md#fields)
- [runtime](EquationsWorkOrdersServicePaginationReq.md#runtime)
- [typeName](EquationsWorkOrdersServicePaginationReq.md#typename)

### Methods

- [clone](EquationsWorkOrdersServicePaginationReq.md#clone)
- [equals](EquationsWorkOrdersServicePaginationReq.md#equals)
- [fromBinary](EquationsWorkOrdersServicePaginationReq.md#frombinary)
- [fromJson](EquationsWorkOrdersServicePaginationReq.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServicePaginationReq.md#fromjsonstring)
- [getType](EquationsWorkOrdersServicePaginationReq.md#gettype)
- [toBinary](EquationsWorkOrdersServicePaginationReq.md#tobinary)
- [toJSON](EquationsWorkOrdersServicePaginationReq.md#tojson)
- [toJson](EquationsWorkOrdersServicePaginationReq.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServicePaginationReq.md#tojsonstring)
- [equals](EquationsWorkOrdersServicePaginationReq.md#equals-1)
- [fromBinary](EquationsWorkOrdersServicePaginationReq.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServicePaginationReq.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServicePaginationReq**(`data?`): [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)\> |

#### Returns

[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Overrides

Message\&lt;EquationsWorkOrdersServicePaginationReq\&gt;.constructor

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1370](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/equations_work_orders.scailo_pb.ts#L1370)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1323](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/equations_work_orders.scailo_pb.ts#L1323)

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

[src/equations_work_orders.scailo_pb.ts:1307](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/equations_work_orders.scailo_pb.ts#L1307)

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

[src/equations_work_orders.scailo_pb.ts:1339](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/equations_work_orders.scailo_pb.ts#L1339)

___

### sortKey

• **sortKey**: [`EQUATION_WORK_ORDER_SORT_KEY`](../enums/EQUATION_WORK_ORDER_SORT_KEY.md) = `EQUATION_WORK_ORDER_SORT_KEY.EQUATION_WORK_ORDER_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.EQUATION_WORK_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1361](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/equations_work_orders.scailo_pb.ts#L1361)

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

[src/equations_work_orders.scailo_pb.ts:1351](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/equations_work_orders.scailo_pb.ts#L1351)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this equation work order

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1368](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/equations_work_orders.scailo_pb.ts#L1368)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1377](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/equations_work_orders.scailo_pb.ts#L1377)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1375](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/equations_work_orders.scailo_pb.ts#L1375)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsWorkOrdersServicePaginationReq"``

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1376](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/equations_work_orders.scailo_pb.ts#L1376)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md) \| `PlainMessage`\<[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md) \| `PlainMessage`\<[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md) \| `PlainMessage`\<[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1398](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/equations_work_orders.scailo_pb.ts#L1398)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1386](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/equations_work_orders.scailo_pb.ts#L1386)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1390](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/equations_work_orders.scailo_pb.ts#L1390)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1394](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/equations_work_orders.scailo_pb.ts#L1394)
