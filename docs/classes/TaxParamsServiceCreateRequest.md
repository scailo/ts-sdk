[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxParamsServiceCreateRequest

# Class: TaxParamsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.TaxParamsServiceCreateRequest

## Hierarchy

- `Message`\<[`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)\>

  ↳ **`TaxParamsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](TaxParamsServiceCreateRequest.md#constructor)

### Properties

- [category](TaxParamsServiceCreateRequest.md#category)
- [description](TaxParamsServiceCreateRequest.md#description)
- [divisor](TaxParamsServiceCreateRequest.md#divisor)
- [entityUuid](TaxParamsServiceCreateRequest.md#entityuuid)
- [inputCreditPercentage](TaxParamsServiceCreateRequest.md#inputcreditpercentage)
- [maxAmount](TaxParamsServiceCreateRequest.md#maxamount)
- [minAmount](TaxParamsServiceCreateRequest.md#minamount)
- [name](TaxParamsServiceCreateRequest.md#name)
- [taxFixedAmount](TaxParamsServiceCreateRequest.md#taxfixedamount)
- [taxRatePercentage](TaxParamsServiceCreateRequest.md#taxratepercentage)
- [userComment](TaxParamsServiceCreateRequest.md#usercomment)
- [valueType](TaxParamsServiceCreateRequest.md#valuetype)
- [fields](TaxParamsServiceCreateRequest.md#fields)
- [runtime](TaxParamsServiceCreateRequest.md#runtime)
- [typeName](TaxParamsServiceCreateRequest.md#typename)

### Methods

- [clone](TaxParamsServiceCreateRequest.md#clone)
- [equals](TaxParamsServiceCreateRequest.md#equals)
- [fromBinary](TaxParamsServiceCreateRequest.md#frombinary)
- [fromJson](TaxParamsServiceCreateRequest.md#fromjson)
- [fromJsonString](TaxParamsServiceCreateRequest.md#fromjsonstring)
- [getType](TaxParamsServiceCreateRequest.md#gettype)
- [toBinary](TaxParamsServiceCreateRequest.md#tobinary)
- [toJSON](TaxParamsServiceCreateRequest.md#tojson)
- [toJson](TaxParamsServiceCreateRequest.md#tojson-1)
- [toJsonString](TaxParamsServiceCreateRequest.md#tojsonstring)
- [equals](TaxParamsServiceCreateRequest.md#equals-1)
- [fromBinary](TaxParamsServiceCreateRequest.md#frombinary-1)
- [fromJson](TaxParamsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](TaxParamsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxParamsServiceCreateRequest**(`data?`): [`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)\> |

#### Returns

[`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)

#### Overrides

Message\&lt;TaxParamsServiceCreateRequest\&gt;.constructor

#### Defined in

src/tax_params.scailo_pb.ts:246

## Properties

### category

• **category**: [`TAX_PARAM_CATEGORY`](../enums/TAX_PARAM_CATEGORY.md) = `TAX_PARAM_CATEGORY.TAX_PARAM_CATEGORY_ANY_UNSPECIFIED`

The category of the tax param

**`Generated`**

from field: Scailo.TAX_PARAM_CATEGORY category = 18;

#### Defined in

src/tax_params.scailo_pb.ts:237

___

### description

• **description**: `string` = `""`

The description of the tax param

**`Generated`**

from field: string description = 20;

#### Defined in

src/tax_params.scailo_pb.ts:244

___

### divisor

• **divisor**: `bigint` = `protoInt64.zero`

The divisor that is defined in order to normalize tax rate percentage

**`Generated`**

from field: uint64 divisor = 14;

#### Defined in

src/tax_params.scailo_pb.ts:209

___

### entityUuid

• **entityUuid**: `string` = `""`

TaxParams a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/tax_params.scailo_pb.ts:167

___

### inputCreditPercentage

• **inputCreditPercentage**: `bigint` = `protoInt64.zero`

The input credit percentage that is applicable

**`Generated`**

from field: uint64 input_credit_percentage = 15;

#### Defined in

src/tax_params.scailo_pb.ts:216

___

### maxAmount

• **maxAmount**: `bigint` = `protoInt64.zero`

The maximum amount of applicable tax (will be disregarded if value is -100)

**`Generated`**

from field: int64 max_amount = 17;

#### Defined in

src/tax_params.scailo_pb.ts:230

___

### minAmount

• **minAmount**: `bigint` = `protoInt64.zero`

The minimum amount of applicable tax (will be disregarded if value is -100)

**`Generated`**

from field: int64 min_amount = 16;

#### Defined in

src/tax_params.scailo_pb.ts:223

___

### name

• **name**: `string` = `""`

The name of the tax param

**`Generated`**

from field: string name = 10;

#### Defined in

src/tax_params.scailo_pb.ts:181

___

### taxFixedAmount

• **taxFixedAmount**: `bigint` = `protoInt64.zero`

The fixed amount of tax (applicable only if value type is fixed)

**`Generated`**

from field: uint64 tax_fixed_amount = 12;

#### Defined in

src/tax_params.scailo_pb.ts:195

___

### taxRatePercentage

• **taxRatePercentage**: `bigint` = `protoInt64.zero`

The percentage of tax (applicable only if value type is percentage)

**`Generated`**

from field: uint64 tax_rate_percentage = 13;

#### Defined in

src/tax_params.scailo_pb.ts:202

___

### userComment

• **userComment**: `string` = `""`

TaxParams any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/tax_params.scailo_pb.ts:174

___

### valueType

• **valueType**: [`TAX_PARAM_VALUE_TYPE`](../enums/TAX_PARAM_VALUE_TYPE.md) = `TAX_PARAM_VALUE_TYPE.TAX_PARAM_VALUE_TYPE_ANY_UNSPECIFIED`

The type of the tax param

**`Generated`**

from field: Scailo.TAX_PARAM_VALUE_TYPE value_type = 11;

#### Defined in

src/tax_params.scailo_pb.ts:188

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/tax_params.scailo_pb.ts:253

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/tax_params.scailo_pb.ts:251

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxParamsServiceCreateRequest"``

#### Defined in

src/tax_params.scailo_pb.ts:252

## Methods

### clone

▸ **clone**(): [`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md) \| `PlainMessage`\<[`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md) \| `PlainMessage`\<[`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md) \| `PlainMessage`\<[`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/tax_params.scailo_pb.ts:280

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)

#### Defined in

src/tax_params.scailo_pb.ts:268

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)

#### Defined in

src/tax_params.scailo_pb.ts:272

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxParamsServiceCreateRequest`](TaxParamsServiceCreateRequest.md)

#### Defined in

src/tax_params.scailo_pb.ts:276
