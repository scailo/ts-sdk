[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServicePaginationReq

# Class: ProductionPlansServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.ProductionPlansServicePaginationReq

## Hierarchy

- `Message`\<[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)\>

  ↳ **`ProductionPlansServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServicePaginationReq.md#constructor)

### Properties

- [count](ProductionPlansServicePaginationReq.md#count)
- [isActive](ProductionPlansServicePaginationReq.md#isactive)
- [offset](ProductionPlansServicePaginationReq.md#offset)
- [sortKey](ProductionPlansServicePaginationReq.md#sortkey)
- [sortOrder](ProductionPlansServicePaginationReq.md#sortorder)
- [status](ProductionPlansServicePaginationReq.md#status)
- [fields](ProductionPlansServicePaginationReq.md#fields)
- [runtime](ProductionPlansServicePaginationReq.md#runtime)
- [typeName](ProductionPlansServicePaginationReq.md#typename)

### Methods

- [clone](ProductionPlansServicePaginationReq.md#clone)
- [equals](ProductionPlansServicePaginationReq.md#equals)
- [fromBinary](ProductionPlansServicePaginationReq.md#frombinary)
- [fromJson](ProductionPlansServicePaginationReq.md#fromjson)
- [fromJsonString](ProductionPlansServicePaginationReq.md#fromjsonstring)
- [getType](ProductionPlansServicePaginationReq.md#gettype)
- [toBinary](ProductionPlansServicePaginationReq.md#tobinary)
- [toJSON](ProductionPlansServicePaginationReq.md#tojson)
- [toJson](ProductionPlansServicePaginationReq.md#tojson-1)
- [toJsonString](ProductionPlansServicePaginationReq.md#tojsonstring)
- [equals](ProductionPlansServicePaginationReq.md#equals-1)
- [fromBinary](ProductionPlansServicePaginationReq.md#frombinary-1)
- [fromJson](ProductionPlansServicePaginationReq.md#fromjson-1)
- [fromJsonString](ProductionPlansServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServicePaginationReq**(`data?`): [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)\> |

#### Returns

[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Overrides

Message\&lt;ProductionPlansServicePaginationReq\&gt;.constructor

#### Defined in

[src/production_plans.scailo_pb.ts:1299](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L1299)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/production_plans.scailo_pb.ts:1269](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L1269)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/production_plans.scailo_pb.ts:1262](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L1262)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/production_plans.scailo_pb.ts:1276](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L1276)

___

### sortKey

• **sortKey**: [`PRODUCTION_PLAN_SORT_KEY`](../enums/PRODUCTION_PLAN_SORT_KEY.md) = `PRODUCTION_PLAN_SORT_KEY.PRODUCTION_PLAN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PRODUCTION_PLAN_SORT_KEY sort_key = 5;

#### Defined in

[src/production_plans.scailo_pb.ts:1290](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L1290)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/production_plans.scailo_pb.ts:1283](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L1283)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this production plan

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/production_plans.scailo_pb.ts:1297](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L1297)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans.scailo_pb.ts:1306](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L1306)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans.scailo_pb.ts:1304](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L1304)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlansServicePaginationReq"``

#### Defined in

[src/production_plans.scailo_pb.ts:1305](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L1305)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md) \| `PlainMessage`\<[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md) \| `PlainMessage`\<[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md) \| `PlainMessage`\<[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans.scailo_pb.ts:1327](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L1327)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Defined in

[src/production_plans.scailo_pb.ts:1315](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L1315)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Defined in

[src/production_plans.scailo_pb.ts:1319](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L1319)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Defined in

[src/production_plans.scailo_pb.ts:1323](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L1323)
