[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxParam

# Class: TaxParam

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.TaxParam

## Hierarchy

- `Message`\<[`TaxParam`](TaxParam.md)\>

  ↳ **`TaxParam`**

## Table of contents

### Constructors

- [constructor](TaxParam.md#constructor)

### Properties

- [approvalMetadata](TaxParam.md#approvalmetadata)
- [category](TaxParam.md#category)
- [code](TaxParam.md#code)
- [description](TaxParam.md#description)
- [divisor](TaxParam.md#divisor)
- [entityUuid](TaxParam.md#entityuuid)
- [inputCreditPercentage](TaxParam.md#inputcreditpercentage)
- [logs](TaxParam.md#logs)
- [maxAmount](TaxParam.md#maxamount)
- [metadata](TaxParam.md#metadata)
- [minAmount](TaxParam.md#minamount)
- [name](TaxParam.md#name)
- [status](TaxParam.md#status)
- [taxFixedAmount](TaxParam.md#taxfixedamount)
- [taxRatePercentage](TaxParam.md#taxratepercentage)
- [valueType](TaxParam.md#valuetype)
- [fields](TaxParam.md#fields)
- [runtime](TaxParam.md#runtime)
- [typeName](TaxParam.md#typename)

### Methods

- [clone](TaxParam.md#clone)
- [equals](TaxParam.md#equals)
- [fromBinary](TaxParam.md#frombinary)
- [fromJson](TaxParam.md#fromjson)
- [fromJsonString](TaxParam.md#fromjsonstring)
- [getType](TaxParam.md#gettype)
- [toBinary](TaxParam.md#tobinary)
- [toJSON](TaxParam.md#tojson)
- [toJson](TaxParam.md#tojson-1)
- [toJsonString](TaxParam.md#tojsonstring)
- [equals](TaxParam.md#equals-1)
- [fromBinary](TaxParam.md#frombinary-1)
- [fromJson](TaxParam.md#fromjson-1)
- [fromJsonString](TaxParam.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxParam**(`data?`): [`TaxParam`](TaxParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxParam`](TaxParam.md)\> |

#### Returns

[`TaxParam`](TaxParam.md)

#### Overrides

Message\&lt;TaxParam\&gt;.constructor

#### Defined in

src/tax_params.scailo_pb.ts:502

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

TaxParams the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/tax_params.scailo_pb.ts:409

___

### category

• **category**: [`TAX_PARAM_CATEGORY`](../enums/TAX_PARAM_CATEGORY.md) = `TAX_PARAM_CATEGORY.TAX_PARAM_CATEGORY_ANY_UNSPECIFIED`

The category of the tax param

**`Generated`**

from field: Scailo.TAX_PARAM_CATEGORY category = 18;

#### Defined in

src/tax_params.scailo_pb.ts:493

___

### code

• **code**: `string` = `""`

The unique code by which the tax param is classified

**`Generated`**

from field: string code = 21;

#### Defined in

src/tax_params.scailo_pb.ts:437

___

### description

• **description**: `string` = `""`

The description of the tax param

**`Generated`**

from field: string description = 20;

#### Defined in

src/tax_params.scailo_pb.ts:500

___

### divisor

• **divisor**: `bigint` = `protoInt64.zero`

The divisor that is defined in order to normalize tax rate percentage

**`Generated`**

from field: uint64 divisor = 14;

#### Defined in

src/tax_params.scailo_pb.ts:465

___

### entityUuid

• **entityUuid**: `string` = `""`

TaxParams a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/tax_params.scailo_pb.ts:395

___

### inputCreditPercentage

• **inputCreditPercentage**: `bigint` = `protoInt64.zero`

The input credit percentage that is applicable

**`Generated`**

from field: uint64 input_credit_percentage = 15;

#### Defined in

src/tax_params.scailo_pb.ts:472

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

TaxParams the logs of every operation performed on this tax param

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/tax_params.scailo_pb.ts:423

___

### maxAmount

• **maxAmount**: `bigint` = `protoInt64.zero`

The maximum amount of applicable tax (will be disregarded if value is -100)

**`Generated`**

from field: int64 max_amount = 17;

#### Defined in

src/tax_params.scailo_pb.ts:486

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

TaxParams the metadata of this tax param

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/tax_params.scailo_pb.ts:402

___

### minAmount

• **minAmount**: `bigint` = `protoInt64.zero`

The minimum amount of applicable tax (will be disregarded if value is -100)

**`Generated`**

from field: int64 min_amount = 16;

#### Defined in

src/tax_params.scailo_pb.ts:479

___

### name

• **name**: `string` = `""`

The name of the tax param

**`Generated`**

from field: string name = 10;

#### Defined in

src/tax_params.scailo_pb.ts:430

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this tax param

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/tax_params.scailo_pb.ts:416

___

### taxFixedAmount

• **taxFixedAmount**: `bigint` = `protoInt64.zero`

The fixed amount of tax (applicable only if value type is fixed)

**`Generated`**

from field: uint64 tax_fixed_amount = 12;

#### Defined in

src/tax_params.scailo_pb.ts:451

___

### taxRatePercentage

• **taxRatePercentage**: `bigint` = `protoInt64.zero`

The percentage of tax (applicable only if value type is percentage)

**`Generated`**

from field: uint64 tax_rate_percentage = 13;

#### Defined in

src/tax_params.scailo_pb.ts:458

___

### valueType

• **valueType**: [`TAX_PARAM_VALUE_TYPE`](../enums/TAX_PARAM_VALUE_TYPE.md) = `TAX_PARAM_VALUE_TYPE.TAX_PARAM_VALUE_TYPE_ANY_UNSPECIFIED`

The type of the tax param

**`Generated`**

from field: Scailo.TAX_PARAM_VALUE_TYPE value_type = 11;

#### Defined in

src/tax_params.scailo_pb.ts:444

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/tax_params.scailo_pb.ts:509

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/tax_params.scailo_pb.ts:507

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxParam"``

#### Defined in

src/tax_params.scailo_pb.ts:508

## Methods

### clone

▸ **clone**(): [`TaxParam`](TaxParam.md)

Create a deep copy.

#### Returns

[`TaxParam`](TaxParam.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxParam`](TaxParam.md) \| `PlainMessage`\<[`TaxParam`](TaxParam.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxParam`](TaxParam.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxParam`](TaxParam.md)\>

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
| `a` | `undefined` \| [`TaxParam`](TaxParam.md) \| `PlainMessage`\<[`TaxParam`](TaxParam.md)\> |
| `b` | `undefined` \| [`TaxParam`](TaxParam.md) \| `PlainMessage`\<[`TaxParam`](TaxParam.md)\> |

#### Returns

`boolean`

#### Defined in

src/tax_params.scailo_pb.ts:540

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxParam`](TaxParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxParam`](TaxParam.md)

#### Defined in

src/tax_params.scailo_pb.ts:528

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxParam`](TaxParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxParam`](TaxParam.md)

#### Defined in

src/tax_params.scailo_pb.ts:532

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxParam`](TaxParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxParam`](TaxParam.md)

#### Defined in

src/tax_params.scailo_pb.ts:536
