[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxParamsServicePaginationReq

# Class: TaxParamsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.TaxParamsServicePaginationReq

## Hierarchy

- `Message`\<[`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)\>

  ↳ **`TaxParamsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](TaxParamsServicePaginationReq.md#constructor)

### Properties

- [count](TaxParamsServicePaginationReq.md#count)
- [isActive](TaxParamsServicePaginationReq.md#isactive)
- [offset](TaxParamsServicePaginationReq.md#offset)
- [sortKey](TaxParamsServicePaginationReq.md#sortkey)
- [sortOrder](TaxParamsServicePaginationReq.md#sortorder)
- [status](TaxParamsServicePaginationReq.md#status)
- [fields](TaxParamsServicePaginationReq.md#fields)
- [runtime](TaxParamsServicePaginationReq.md#runtime)
- [typeName](TaxParamsServicePaginationReq.md#typename)

### Methods

- [clone](TaxParamsServicePaginationReq.md#clone)
- [equals](TaxParamsServicePaginationReq.md#equals)
- [fromBinary](TaxParamsServicePaginationReq.md#frombinary)
- [fromJson](TaxParamsServicePaginationReq.md#fromjson)
- [fromJsonString](TaxParamsServicePaginationReq.md#fromjsonstring)
- [getType](TaxParamsServicePaginationReq.md#gettype)
- [toBinary](TaxParamsServicePaginationReq.md#tobinary)
- [toJSON](TaxParamsServicePaginationReq.md#tojson)
- [toJson](TaxParamsServicePaginationReq.md#tojson-1)
- [toJsonString](TaxParamsServicePaginationReq.md#tojsonstring)
- [equals](TaxParamsServicePaginationReq.md#equals-1)
- [fromBinary](TaxParamsServicePaginationReq.md#frombinary-1)
- [fromJson](TaxParamsServicePaginationReq.md#fromjson-1)
- [fromJsonString](TaxParamsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxParamsServicePaginationReq**(`data?`): [`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)\> |

#### Returns

[`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)

#### Overrides

Message\&lt;TaxParamsServicePaginationReq\&gt;.constructor

#### Defined in

src/tax_params.scailo_pb.ts:604

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/tax_params.scailo_pb.ts:574

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/tax_params.scailo_pb.ts:567

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/tax_params.scailo_pb.ts:581

___

### sortKey

• **sortKey**: [`TAX_PARAM_SORT_KEY`](../enums/TAX_PARAM_SORT_KEY.md) = `TAX_PARAM_SORT_KEY.TAX_PARAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.TAX_PARAM_SORT_KEY sort_key = 5;

#### Defined in

src/tax_params.scailo_pb.ts:595

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/tax_params.scailo_pb.ts:588

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this tax param

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

src/tax_params.scailo_pb.ts:602

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/tax_params.scailo_pb.ts:611

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/tax_params.scailo_pb.ts:609

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxParamsServicePaginationReq"``

#### Defined in

src/tax_params.scailo_pb.ts:610

## Methods

### clone

▸ **clone**(): [`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md) \| `PlainMessage`\<[`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md) \| `PlainMessage`\<[`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md) \| `PlainMessage`\<[`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/tax_params.scailo_pb.ts:632

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)

#### Defined in

src/tax_params.scailo_pb.ts:620

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)

#### Defined in

src/tax_params.scailo_pb.ts:624

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxParamsServicePaginationReq`](TaxParamsServicePaginationReq.md)

#### Defined in

src/tax_params.scailo_pb.ts:628
