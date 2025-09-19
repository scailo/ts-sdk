[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxGroup

# Class: TaxGroup

Describes the groups that are part of a standard response

**`Generated`**

from message Scailo.TaxGroup

## Hierarchy

- `Message`\<[`TaxGroup`](TaxGroup.md)\>

  ↳ **`TaxGroup`**

## Table of contents

### Constructors

- [constructor](TaxGroup.md#constructor)

### Properties

- [approvalMetadata](TaxGroup.md#approvalmetadata)
- [category](TaxGroup.md#category)
- [code](TaxGroup.md#code)
- [cumulativeTaxPercentage](TaxGroup.md#cumulativetaxpercentage)
- [description](TaxGroup.md#description)
- [entityUuid](TaxGroup.md#entityuuid)
- [list](TaxGroup.md#list)
- [logs](TaxGroup.md#logs)
- [metadata](TaxGroup.md#metadata)
- [name](TaxGroup.md#name)
- [status](TaxGroup.md#status)
- [taxParams](TaxGroup.md#taxparams)
- [fields](TaxGroup.md#fields)
- [runtime](TaxGroup.md#runtime)
- [typeName](TaxGroup.md#typename)

### Methods

- [clone](TaxGroup.md#clone)
- [equals](TaxGroup.md#equals)
- [fromBinary](TaxGroup.md#frombinary)
- [fromJson](TaxGroup.md#fromjson)
- [fromJsonString](TaxGroup.md#fromjsonstring)
- [getType](TaxGroup.md#gettype)
- [toBinary](TaxGroup.md#tobinary)
- [toJSON](TaxGroup.md#tojson)
- [toJson](TaxGroup.md#tojson-1)
- [toJsonString](TaxGroup.md#tojsonstring)
- [equals](TaxGroup.md#equals-1)
- [fromBinary](TaxGroup.md#frombinary-1)
- [fromJson](TaxGroup.md#fromjson-1)
- [fromJsonString](TaxGroup.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxGroup**(`data?`): [`TaxGroup`](TaxGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxGroup`](TaxGroup.md)\> |

#### Returns

[`TaxGroup`](TaxGroup.md)

#### Overrides

Message\&lt;TaxGroup\&gt;.constructor

#### Defined in

[src/tax_groups.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L384)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

TaxGroups the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/tax_groups.scailo_pb.ts:319](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L319)

___

### category

• **category**: [`TAX_GROUP_CATEGORY`](../enums/TAX_GROUP_CATEGORY.md) = `TAX_GROUP_CATEGORY.TAX_GROUP_CATEGORY_ANY_UNSPECIFIED`

The category of the tax group

**`Generated`**

from field: Scailo.TAX_GROUP_CATEGORY category = 11;

#### Defined in

[src/tax_groups.scailo_pb.ts:354](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L354)

___

### code

• **code**: `string` = `""`

The unique code by which the tax group is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/tax_groups.scailo_pb.ts:347](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L347)

___

### cumulativeTaxPercentage

• **cumulativeTaxPercentage**: `number` = `0`

The cumulative tax percentage

**`Generated`**

from field: double cumulative_tax_percentage = 60;

#### Defined in

[src/tax_groups.scailo_pb.ts:382](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L382)

___

### description

• **description**: `string` = `""`

The description of the tax group

**`Generated`**

from field: string description = 12;

#### Defined in

[src/tax_groups.scailo_pb.ts:361](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L361)

___

### entityUuid

• **entityUuid**: `string` = `""`

TaxGroups a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/tax_groups.scailo_pb.ts:305](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L305)

___

### list

• **list**: [`TaxGroupItem`](TaxGroupItem.md)[] = `[]`

The list of associated tax group items

**`Generated`**

from field: repeated Scailo.TaxGroupItem list = 30;

#### Defined in

[src/tax_groups.scailo_pb.ts:368](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L368)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

TaxGroups the logs of every operation performed on this tax group

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/tax_groups.scailo_pb.ts:333](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L333)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

TaxGroups the metadata of this tax group

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/tax_groups.scailo_pb.ts:312](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L312)

___

### name

• **name**: `string` = `""`

The name of the tax group

**`Generated`**

from field: string name = 10;

#### Defined in

[src/tax_groups.scailo_pb.ts:340](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L340)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this tax group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/tax_groups.scailo_pb.ts:326](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L326)

___

### taxParams

• **taxParams**: [`TaxParam`](TaxParam.md)[] = `[]`

The list of associated tax parameters

**`Generated`**

from field: repeated Scailo.TaxParam tax_params = 50;

#### Defined in

[src/tax_groups.scailo_pb.ts:375](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L375)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/tax_groups.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L391)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/tax_groups.scailo_pb.ts:389](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L389)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxGroup"``

#### Defined in

[src/tax_groups.scailo_pb.ts:390](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L390)

## Methods

### clone

▸ **clone**(): [`TaxGroup`](TaxGroup.md)

Create a deep copy.

#### Returns

[`TaxGroup`](TaxGroup.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxGroup`](TaxGroup.md) \| `PlainMessage`\<[`TaxGroup`](TaxGroup.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxGroup`](TaxGroup.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxGroup`](TaxGroup.md)\>

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
| `a` | `undefined` \| [`TaxGroup`](TaxGroup.md) \| `PlainMessage`\<[`TaxGroup`](TaxGroup.md)\> |
| `b` | `undefined` \| [`TaxGroup`](TaxGroup.md) \| `PlainMessage`\<[`TaxGroup`](TaxGroup.md)\> |

#### Returns

`boolean`

#### Defined in

[src/tax_groups.scailo_pb.ts:418](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L418)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxGroup`](TaxGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxGroup`](TaxGroup.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L406)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxGroup`](TaxGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroup`](TaxGroup.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L410)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxGroup`](TaxGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroup`](TaxGroup.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L414)
