[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSampleParametersSearchRequest

# Class: QCSampleParametersSearchRequest

Describes the request payload to retrieve parameters.

**`Generated`**

from message Scailo.QCSampleParametersSearchRequest

## Hierarchy

- `Message`\<[`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)\>

  ↳ **`QCSampleParametersSearchRequest`**

## Table of contents

### Constructors

- [constructor](QCSampleParametersSearchRequest.md#constructor)

### Properties

- [checkedAtEnd](QCSampleParametersSearchRequest.md#checkedatend)
- [checkedAtStart](QCSampleParametersSearchRequest.md#checkedatstart)
- [checkedBy](QCSampleParametersSearchRequest.md#checkedby)
- [count](QCSampleParametersSearchRequest.md#count)
- [entityUuid](QCSampleParametersSearchRequest.md#entityuuid)
- [familyId](QCSampleParametersSearchRequest.md#familyid)
- [goodsReceiptId](QCSampleParametersSearchRequest.md#goodsreceiptid)
- [inwardJobFreeIssueMaterialId](QCSampleParametersSearchRequest.md#inwardjobfreeissuematerialid)
- [isActive](QCSampleParametersSearchRequest.md#isactive)
- [numberObservedValueEnd](QCSampleParametersSearchRequest.md#numberobservedvalueend)
- [numberObservedValueStart](QCSampleParametersSearchRequest.md#numberobservedvaluestart)
- [offset](QCSampleParametersSearchRequest.md#offset)
- [productionPlanId](QCSampleParametersSearchRequest.md#productionplanid)
- [qcParamId](QCSampleParametersSearchRequest.md#qcparamid)
- [qcSampleId](QCSampleParametersSearchRequest.md#qcsampleid)
- [searchKey](QCSampleParametersSearchRequest.md#searchkey)
- [sortKey](QCSampleParametersSearchRequest.md#sortkey)
- [sortOrder](QCSampleParametersSearchRequest.md#sortorder)
- [textObservedValue](QCSampleParametersSearchRequest.md#textobservedvalue)
- [uomId](QCSampleParametersSearchRequest.md#uomid)
- [vendorId](QCSampleParametersSearchRequest.md#vendorid)
- [fields](QCSampleParametersSearchRequest.md#fields)
- [runtime](QCSampleParametersSearchRequest.md#runtime)
- [typeName](QCSampleParametersSearchRequest.md#typename)

### Methods

- [clone](QCSampleParametersSearchRequest.md#clone)
- [equals](QCSampleParametersSearchRequest.md#equals)
- [fromBinary](QCSampleParametersSearchRequest.md#frombinary)
- [fromJson](QCSampleParametersSearchRequest.md#fromjson)
- [fromJsonString](QCSampleParametersSearchRequest.md#fromjsonstring)
- [getType](QCSampleParametersSearchRequest.md#gettype)
- [toBinary](QCSampleParametersSearchRequest.md#tobinary)
- [toJSON](QCSampleParametersSearchRequest.md#tojson)
- [toJson](QCSampleParametersSearchRequest.md#tojson-1)
- [toJsonString](QCSampleParametersSearchRequest.md#tojsonstring)
- [equals](QCSampleParametersSearchRequest.md#equals-1)
- [fromBinary](QCSampleParametersSearchRequest.md#frombinary-1)
- [fromJson](QCSampleParametersSearchRequest.md#fromjson-1)
- [fromJsonString](QCSampleParametersSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSampleParametersSearchRequest**(`data?`): [`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)\> |

#### Returns

[`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)

#### Overrides

Message\&lt;QCSampleParametersSearchRequest\&gt;.constructor

#### Defined in

src/qc_samples.scailo_pb.ts:2187

## Properties

### checkedAtEnd

• **checkedAtEnd**: `bigint` = `protoInt64.zero`

The end range of checked timestamp

**`Generated`**

from field: uint64 checked_at_end = 12;

#### Defined in

src/qc_samples.scailo_pb.ts:2096

___

### checkedAtStart

• **checkedAtStart**: `bigint` = `protoInt64.zero`

The start range of checked timestamp

**`Generated`**

from field: uint64 checked_at_start = 11;

#### Defined in

src/qc_samples.scailo_pb.ts:2089

___

### checkedBy

• **checkedBy**: `string` = `""`

Stores the username of the employee who performed the check

**`Generated`**

from field: string checked_by = 10;

#### Defined in

src/qc_samples.scailo_pb.ts:2082

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/qc_samples.scailo_pb.ts:2047

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/qc_samples.scailo_pb.ts:2075

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

------------------------------------------------------------

**`Generated`**

from field: uint64 family_id = 60;

#### Defined in

src/qc_samples.scailo_pb.ts:2185

___

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

The associated goods receipt ID

**`Generated`**

from field: uint64 goods_receipt_id = 51;

#### Defined in

src/qc_samples.scailo_pb.ts:2162

___

### inwardJobFreeIssueMaterialId

• **inwardJobFreeIssueMaterialId**: `bigint` = `protoInt64.zero`

The associated inward job free issue material ID

**`Generated`**

from field: uint64 inward_job_free_issue_material_id = 52;

#### Defined in

src/qc_samples.scailo_pb.ts:2169

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/qc_samples.scailo_pb.ts:2040

___

### numberObservedValueEnd

• **numberObservedValueEnd**: `bigint` = `protoInt64.zero`

The end range of number observed value

**`Generated`**

from field: int64 number_observed_value_end = 21;

#### Defined in

src/qc_samples.scailo_pb.ts:2131

___

### numberObservedValueStart

• **numberObservedValueStart**: `bigint` = `protoInt64.zero`

The start range of number observed value

**`Generated`**

from field: int64 number_observed_value_start = 20;

#### Defined in

src/qc_samples.scailo_pb.ts:2124

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/qc_samples.scailo_pb.ts:2054

___

### productionPlanId

• **productionPlanId**: `bigint` = `protoInt64.zero`

------------------------------------------------------------
Higher order filters
------------------------------------------------------------
The associated production plan ID

**`Generated`**

from field: uint64 production_plan_id = 50;

#### Defined in

src/qc_samples.scailo_pb.ts:2155

___

### qcParamId

• **qcParamId**: `bigint` = `protoInt64.zero`

The ID of the qc param that is a part of the qc sample

**`Generated`**

from field: uint64 qc_param_id = 14;

#### Defined in

src/qc_samples.scailo_pb.ts:2110

___

### qcSampleId

• **qcSampleId**: `bigint` = `protoInt64.zero`

The ID of the qc sample

**`Generated`**

from field: uint64 qc_sample_id = 13;

#### Defined in

src/qc_samples.scailo_pb.ts:2103

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/qc_samples.scailo_pb.ts:2145

___

### sortKey

• **sortKey**: [`QC_SAMPLE_PARAMETER_SORT_KEY`](../enums/QC_SAMPLE_PARAMETER_SORT_KEY.md) = `QC_SAMPLE_PARAMETER_SORT_KEY.QC_SAMPLE_PARAMETER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.QC_SAMPLE_PARAMETER_SORT_KEY sort_key = 5;

#### Defined in

src/qc_samples.scailo_pb.ts:2068

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/qc_samples.scailo_pb.ts:2061

___

### textObservedValue

• **textObservedValue**: `string` = `""`

The text observed value

**`Generated`**

from field: string text_observed_value = 22;

#### Defined in

src/qc_samples.scailo_pb.ts:2138

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 15;

#### Defined in

src/qc_samples.scailo_pb.ts:2117

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The associated vendor ID

**`Generated`**

from field: uint64 vendor_id = 55;

#### Defined in

src/qc_samples.scailo_pb.ts:2176

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_samples.scailo_pb.ts:2194

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_samples.scailo_pb.ts:2192

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSampleParametersSearchRequest"``

#### Defined in

src/qc_samples.scailo_pb.ts:2193

## Methods

### clone

▸ **clone**(): [`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)

Create a deep copy.

#### Returns

[`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md) \| `PlainMessage`\<[`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)\>

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
| `a` | `undefined` \| [`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md) \| `PlainMessage`\<[`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)\> |
| `b` | `undefined` \| [`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md) \| `PlainMessage`\<[`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_samples.scailo_pb.ts:2230

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)

#### Defined in

src/qc_samples.scailo_pb.ts:2218

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)

#### Defined in

src/qc_samples.scailo_pb.ts:2222

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSampleParametersSearchRequest`](QCSampleParametersSearchRequest.md)

#### Defined in

src/qc_samples.scailo_pb.ts:2226
