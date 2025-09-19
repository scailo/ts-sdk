[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuance

# Class: StockIssuance

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.StockIssuance

## Hierarchy

- `Message`\<[`StockIssuance`](StockIssuance.md)\>

  ↳ **`StockIssuance`**

## Table of contents

### Constructors

- [constructor](StockIssuance.md#constructor)

### Properties

- [approvalMetadata](StockIssuance.md#approvalmetadata)
- [completedOn](StockIssuance.md#completedon)
- [entityUuid](StockIssuance.md#entityuuid)
- [finalRefNumber](StockIssuance.md#finalrefnumber)
- [formData](StockIssuance.md#formdata)
- [list](StockIssuance.md#list)
- [locationId](StockIssuance.md#locationid)
- [logs](StockIssuance.md#logs)
- [metadata](StockIssuance.md#metadata)
- [refFrom](StockIssuance.md#reffrom)
- [refId](StockIssuance.md#refid)
- [referenceId](StockIssuance.md#referenceid)
- [status](StockIssuance.md#status)
- [vaultFolderId](StockIssuance.md#vaultfolderid)
- [fields](StockIssuance.md#fields)
- [runtime](StockIssuance.md#runtime)
- [typeName](StockIssuance.md#typename)

### Methods

- [clone](StockIssuance.md#clone)
- [equals](StockIssuance.md#equals)
- [fromBinary](StockIssuance.md#frombinary)
- [fromJson](StockIssuance.md#fromjson)
- [fromJsonString](StockIssuance.md#fromjsonstring)
- [getType](StockIssuance.md#gettype)
- [toBinary](StockIssuance.md#tobinary)
- [toJSON](StockIssuance.md#tojson)
- [toJson](StockIssuance.md#tojson-1)
- [toJsonString](StockIssuance.md#tojsonstring)
- [equals](StockIssuance.md#equals-1)
- [fromBinary](StockIssuance.md#frombinary-1)
- [fromJson](StockIssuance.md#fromjson-1)
- [fromJsonString](StockIssuance.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuance**(`data?`): [`StockIssuance`](StockIssuance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuance`](StockIssuance.md)\> |

#### Returns

[`StockIssuance`](StockIssuance.md)

#### Overrides

Message\&lt;StockIssuance\&gt;.constructor

#### Defined in

[src/stock_issuances.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L582)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/stock_issuances.scailo_pb.ts:503](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L503)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this stock issuance was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/stock_issuances.scailo_pb.ts:524](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L524)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/stock_issuances.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L489)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/stock_issuances.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L545)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/stock_issuances.scailo_pb.ts:580](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L580)

___

### list

• **list**: [`StockIssuanceItem`](StockIssuanceItem.md)[] = `[]`

The list of associated stock issuance items

**`Generated`**

from field: repeated Scailo.StockIssuanceItem list = 20;

#### Defined in

[src/stock_issuances.scailo_pb.ts:573](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L573)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

[src/stock_issuances.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L566)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this stock issuance

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/stock_issuances.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L517)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this stock issuance

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/stock_issuances.scailo_pb.ts:496](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L496)

___

### refFrom

• **refFrom**: [`STOCK_ISSUANCE_REF_FROM`](../enums/STOCK_ISSUANCE_REF_FROM.md) = `STOCK_ISSUANCE_REF_FROM.STOCK_ISSUANCE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.STOCK_ISSUANCE_REF_FROM ref_from = 12;

#### Defined in

[src/stock_issuances.scailo_pb.ts:552](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L552)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/stock_issuances.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L559)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock issuance

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/stock_issuances.scailo_pb.ts:538](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L538)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this stock issuance

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/stock_issuances.scailo_pb.ts:510](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L510)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/stock_issuances.scailo_pb.ts:531](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L531)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L589)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances.scailo_pb.ts:587](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L587)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuance"``

#### Defined in

[src/stock_issuances.scailo_pb.ts:588](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L588)

## Methods

### clone

▸ **clone**(): [`StockIssuance`](StockIssuance.md)

Create a deep copy.

#### Returns

[`StockIssuance`](StockIssuance.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuance`](StockIssuance.md) \| `PlainMessage`\<[`StockIssuance`](StockIssuance.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockIssuance`](StockIssuance.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuance`](StockIssuance.md)\>

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
| `a` | `undefined` \| [`StockIssuance`](StockIssuance.md) \| `PlainMessage`\<[`StockIssuance`](StockIssuance.md)\> |
| `b` | `undefined` \| [`StockIssuance`](StockIssuance.md) \| `PlainMessage`\<[`StockIssuance`](StockIssuance.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances.scailo_pb.ts:618](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L618)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuance`](StockIssuance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuance`](StockIssuance.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L606)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuance`](StockIssuance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuance`](StockIssuance.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:610](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L610)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuance`](StockIssuance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuance`](StockIssuance.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:614](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L614)
